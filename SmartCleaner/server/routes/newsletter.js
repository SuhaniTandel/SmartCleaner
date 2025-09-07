const express = require('express');
const Newsletter = require('../models/Newsletter');

const router = express.Router();

// @route   POST /api/newsletter/subscribe
// @desc    Subscribe to newsletter
// @access  Public
router.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body;

    // Validation
    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required'
      });
    }

    // Check if email is already subscribed
    const existingSubscription = await Newsletter.findOne({ email });
    
    if (existingSubscription) {
      if (existingSubscription.isActive) {
        return res.status(400).json({
          success: false,
          message: 'Email is already subscribed to our newsletter'
        });
      } else {
        // Reactivate subscription
        existingSubscription.isActive = true;
        existingSubscription.subscribedAt = new Date();
        await existingSubscription.save();
        
        return res.json({
          success: true,
          message: 'Successfully resubscribed to newsletter!'
        });
      }
    }

    // Create new subscription
    const subscription = new Newsletter({ email });
    await subscription.save();

    res.status(201).json({
      success: true,
      message: 'Successfully subscribed to newsletter!'
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', ')
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error during newsletter subscription'
    });
  }
});

// @route   POST /api/newsletter/unsubscribe
// @desc    Unsubscribe from newsletter
// @access  Public
router.post('/unsubscribe', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required'
      });
    }

    const subscription = await Newsletter.findOne({ email });
    
    if (!subscription) {
      return res.status(404).json({
        success: false,
        message: 'Email not found in our newsletter list'
      });
    }

    subscription.isActive = false;
    await subscription.save();

    res.json({
      success: true,
      message: 'Successfully unsubscribed from newsletter'
    });
  } catch (error) {
    console.error('Newsletter unsubscribe error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error during unsubscribe'
    });
  }
});

// @route   GET /api/newsletter/stats
// @desc    Get newsletter statistics
// @access  Public (could be protected in production)
router.get('/stats', async (req, res) => {
  try {
    const totalSubscribers = await Newsletter.countDocuments({ isActive: true });
    const totalUnsubscribed = await Newsletter.countDocuments({ isActive: false });
    const recentSubscribers = await Newsletter.countDocuments({
      isActive: true,
      subscribedAt: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) } // Last 30 days
    });

    res.json({
      success: true,
      data: {
        totalSubscribers,
        totalUnsubscribed,
        recentSubscribers
      }
    });
  } catch (error) {
    console.error('Newsletter stats error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching newsletter stats'
    });
  }
});

module.exports = router;