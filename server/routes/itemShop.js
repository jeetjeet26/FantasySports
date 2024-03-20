const express = require('express');
const router = express.Router();
const CosmeticItem = require('../models/CosmeticItem');

// GET /item-shop/items - List all cosmetic items
router.get('/items', async (req, res) => {
  try {
    const items = await CosmeticItem.find({});
    res.json(items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
