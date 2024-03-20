// Inside server/routes/vc.js

const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Transaction = require('../models/Transaction');

// Middleware to authenticate users might go here

// POST /api/vc/add - Add VC to a user's account
router.post('/add', async (req, res) => {
  const { userId, amount, type } = req.body; // type might be "win", "challenge", etc.

  try {
    // Update the user's VC balance
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.vcBalance += amount;
    await user.save();

    // Log the transaction
    const transaction = new Transaction({
      user: userId,
      amount,
      type,
    });
    await transaction.save();

    res.json({ message: 'VC added successfully', newBalance: user.vcBalance });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET /api/vc/balance - Get a user's VC balance
router.get('/balance', async (req, res) => {
  const { userId } = req.query; // Assuming you pass userId as a query parameter

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Respond with the user's VC balance
    res.json({ vcBalance: user.vcBalance });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
