const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'User is required']
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
    required: [true, 'Service is required']
  },
  date: {
    type: Date,
    required: [true, 'Booking date is required'],
    validate: {
      validator: function(date) {
        return date > new Date();
      },
      message: 'Booking date must be in the future'
    }
  },
  time: {
    type: String,
    required: [true, 'Booking time is required'],
    match: [/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]\s?(AM|PM)$/i, 'Please enter a valid time format']
  },
  address: {
    type: String,
    required: [true, 'Service address is required'],
    trim: true,
    maxlength: [200, 'Address cannot exceed 200 characters']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    match: [/^\+?[\d\s\-\(\)]+$/, 'Please enter a valid phone number']
  },
  frequency: {
    type: String,
    enum: ['one-time', 'weekly', 'bi-weekly', 'monthly'],
    default: 'one-time'
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'in-progress', 'completed', 'cancelled'],
    default: 'pending'
  },
  notes: {
    type: String,
    maxlength: [500, 'Notes cannot exceed 500 characters']
  },
  totalPrice: {
    type: Number,
    required: [true, 'Total price is required'],
    min: [0, 'Price cannot be negative']
  }
}, {
  timestamps: true
});

// Index for efficient queries
bookingSchema.index({ user: 1, date: 1 });
bookingSchema.index({ status: 1 });

module.exports = mongoose.model('Booking', bookingSchema);