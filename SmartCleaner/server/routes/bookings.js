const express = require('express');
const Booking = require('../models/Booking');
const Service = require('../models/Service');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   POST /api/bookings
// @desc    Create a new booking
// @access  Private
router.post('/', auth, async (req, res) => {
  try {
    const { serviceId, date, time, address, phone, frequency, notes } = req.body;

    // Validation
    if (!serviceId || !date || !time || !address || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: service, date, time, address, and phone'
      });
    }

    // Validate service exists
    const service = await Service.findById(serviceId);
    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }

    // Validate date is in the future
    const bookingDate = new Date(date);
    if (bookingDate <= new Date()) {
      return res.status(400).json({
        success: false,
        message: 'Booking date must be in the future'
      });
    }

    // Check for existing booking at the same date and time
    const existingBooking = await Booking.findOne({
      date: bookingDate,
      time: time,
      status: { $in: ['pending', 'confirmed'] }
    });

    if (existingBooking) {
      return res.status(400).json({
        success: false,
        message: 'This time slot is already booked. Please choose a different time.'
      });
    }

    // Create booking
    const booking = new Booking({
      user: req.user._id,
      service: serviceId,
      date: bookingDate,
      time,
      address,
      phone,
      frequency: frequency || 'one-time',
      notes,
      totalPrice: service.price
    });

    await booking.save();

    // Populate service details for response
    await booking.populate('service', 'name description price duration');

    res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      data: booking
    });
  } catch (error) {
    console.error('Create booking error:', error);
    
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', ')
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error while creating booking'
    });
  }
});

// @route   GET /api/bookings
// @desc    Get user's bookings
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;
    
    const query = { user: req.user._id };
    if (status) {
      query.status = status;
    }

    const bookings = await Booking.find(query)
      .populate('service', 'name description price duration category')
      .sort({ date: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Booking.countDocuments(query);

    res.json({
      success: true,
      count: bookings.length,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / limit),
      data: bookings
    });
  } catch (error) {
    console.error('Get bookings error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching bookings'
    });
  }
});

// @route   GET /api/bookings/:id
// @desc    Get single booking
// @access  Private
router.get('/:id', auth, async (req, res) => {
  try {
    const booking = await Booking.findOne({
      _id: req.params.id,
      user: req.user._id
    }).populate('service', 'name description price duration category');

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    res.json({
      success: true,
      data: booking
    });
  } catch (error) {
    console.error('Get booking error:', error);
    
    if (error.name === 'CastError') {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error while fetching booking'
    });
  }
});

// @route   PUT /api/bookings/:id
// @desc    Update booking
// @access  Private
router.put('/:id', auth, async (req, res) => {
  try {
    const { date, time, address, phone, notes } = req.body;

    const booking = await Booking.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    // Check if booking can be updated (not completed or cancelled)
    if (['completed', 'cancelled'].includes(booking.status)) {
      return res.status(400).json({
        success: false,
        message: 'Cannot update completed or cancelled bookings'
      });
    }

    // Update fields
    if (date) {
      const bookingDate = new Date(date);
      if (bookingDate <= new Date()) {
        return res.status(400).json({
          success: false,
          message: 'Booking date must be in the future'
        });
      }
      booking.date = bookingDate;
    }

    if (time) booking.time = time;
    if (address) booking.address = address;
    if (phone) booking.phone = phone;
    if (notes !== undefined) booking.notes = notes;

    await booking.save();
    await booking.populate('service', 'name description price duration');

    res.json({
      success: true,
      message: 'Booking updated successfully',
      data: booking
    });
  } catch (error) {
    console.error('Update booking error:', error);
    
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', ')
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error while updating booking'
    });
  }
});

// @route   DELETE /api/bookings/:id
// @desc    Cancel booking
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const booking = await Booking.findOne({
      _id: req.params.id,
      user: req.user._id
    });

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    // Check if booking can be cancelled
    if (['completed', 'cancelled'].includes(booking.status)) {
      return res.status(400).json({
        success: false,
        message: 'Cannot cancel completed or already cancelled bookings'
      });
    }

    booking.status = 'cancelled';
    await booking.save();

    res.json({
      success: true,
      message: 'Booking cancelled successfully',
      data: booking
    });
  } catch (error) {
    console.error('Cancel booking error:', error);
    
    if (error.name === 'CastError') {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error while cancelling booking'
    });
  }
});

module.exports = router;