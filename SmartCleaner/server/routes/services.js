const express = require('express');
const Service = require('../models/Service');

const router = express.Router();

// @route   GET /api/services
// @desc    Get all active services
// @access  Public
router.get('/', async (req, res) => {
  try {
    const services = await Service.find({ isActive: true }).sort({ category: 1, price: 1 });
    
    res.json({
      success: true,
      count: services.length,
      data: services
    });
  } catch (error) {
    console.error('Get services error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching services'
    });
  }
});

// @route   GET /api/services/:id
// @desc    Get single service
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    
    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }

    res.json({
      success: true,
      data: service
    });
  } catch (error) {
    console.error('Get service error:', error);
    
    if (error.name === 'CastError') {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error while fetching service'
    });
  }
});

// Initialize default services (run once)
router.post('/init', async (req, res) => {
  try {
    const existingServices = await Service.countDocuments();
    
    if (existingServices > 0) {
      return res.json({
        success: true,
        message: 'Services already initialized'
      });
    }

    const defaultServices = [
      {
        name: 'Basic Clean',
        description: 'Regular cleaning for maintenance including dusting, vacuuming, and basic sanitization.',
        price: 99,
        duration: 120,
        category: 'residential',
        features: [
          'General cleaning of all rooms',
          'Bathroom sanitization',
          'Kitchen cleaning',
          'Dusting and vacuuming',
          'Trash removal',
          'Basic organization'
        ]
      },
      {
        name: 'Deep Clean',
        description: 'Comprehensive cleaning service with detailed attention to every corner of your space.',
        price: 179,
        duration: 240,
        category: 'residential',
        features: [
          'Everything in Basic Clean',
          'Inside appliance cleaning',
          'Baseboards and window sills',
          'Light fixture cleaning',
          'Cabinet front cleaning',
          'Detailed bathroom scrubbing',
          'Carpet spot treatment'
        ]
      },
      {
        name: 'Premium Service',
        description: 'Ultimate cleaning experience with premium services and extra attention to detail.',
        price: 249,
        duration: 300,
        category: 'residential',
        features: [
          'Everything in Deep Clean',
          'Inside oven cleaning',
          'Inside refrigerator cleaning',
          'Window cleaning (interior)',
          'Garage organization',
          'Laundry service',
          'Plant watering',
          'Priority scheduling'
        ]
      },
      {
        name: 'Office Cleaning',
        description: 'Professional office cleaning to maintain a productive work environment.',
        price: 149,
        duration: 180,
        category: 'commercial',
        features: [
          'Desk and workspace cleaning',
          'Restroom sanitization',
          'Kitchen/break room cleaning',
          'Floor cleaning and mopping',
          'Trash removal',
          'Window cleaning'
        ]
      },
      {
        name: 'Carpet Cleaning',
        description: 'Professional carpet and upholstery cleaning using advanced steam cleaning methods.',
        price: 89,
        duration: 90,
        category: 'specialized',
        features: [
          'Deep steam cleaning',
          'Stain removal',
          'Odor elimination',
          'Fast drying process',
          'Eco-friendly products',
          'Furniture moving'
        ]
      }
    ];

    await Service.insertMany(defaultServices);

    res.status(201).json({
      success: true,
      message: 'Default services initialized successfully',
      count: defaultServices.length
    });
  } catch (error) {
    console.error('Initialize services error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while initializing services'
    });
  }
});

module.exports = router;