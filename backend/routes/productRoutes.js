const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // Adjust the path if your model is elsewhere

// @route   GET /api/products
// @desc    Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
