'use strict';

const express = require('express');
const router = express.Router();

// Dummy shopping cart storage
let cart = [];

// Endpoint to get the shopping cart
router.get('/', (req, res) => {
    res.json(cart);
});

// Endpoint to add an item to the shopping cart
router.post('/add', (req, res) => {
    const { item } = req.body;
    if (!item) {
        return res.status(400).json({ message: 'Item is required' });
    }
    cart.push(item);
    res.status(201).json({ message: 'Item added to cart', cart });
});

// Endpoint to remove an item from the shopping cart
router.delete('/remove', (req, res) => {
    const { item } = req.body;
    cart = cart.filter(cartItem => cartItem !== item);
    res.json({ message: 'Item removed from cart', cart });
});

// Endpoint to clear the shopping cart
router.delete('/clear', (req, res) => {
    cart = [];
    res.json({ message: 'Cart cleared', cart });
});

module.exports = router;
