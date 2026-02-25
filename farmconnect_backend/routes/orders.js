const express = require('express');
const Order = require('../models/Order');
const Cart = require('../models/Cart');
const { verifyToken } = require('../middleware/auth');

const router = express.Router();

// Create order
router.post('/', verifyToken, async (req, res) => {
  try {
    const { shippingAddress, paymentMethod } = req.body;

    const cart = await Cart.findOne({ user: req.userId });

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    const order = new Order({
      user: req.userId,
      items: cart.items,
      totalAmount: cart.totalPrice,
      shippingAddress,
      paymentMethod,
    });

    await order.save();

    // Clear cart after order creation
    await Cart.deleteOne({ user: req.userId });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get user's orders
router.get('/', verifyToken, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.userId }).populate('items.product');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single order
router.get('/:id', verifyToken, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('items.product');

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    if (order.user.toString() !== req.userId) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;