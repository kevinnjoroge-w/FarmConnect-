const express = require('express');
const User = require('../models/User');
const Product = require('../models/Product');

const router = express.Router();

// Get all farmers
router.get('/', async (req, res) => {
  try {
    const farmers = await User.find({ role: 'farmer' }).select('-password');
    res.json(farmers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get farmer profile
router.get('/:id', async (req, res) => {
  try {
    const farmer = await User.findById(req.params.id).select('-password');
    const products = await Product.find({ farmer: req.params.id });

    if (!farmer) {
      return res.status(404).json({ message: 'Farmer not found' });
    }

    res.json({
      farmer,
      products,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;