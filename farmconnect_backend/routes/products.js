const express = require('express');
const router = express.Router();

// Mock database
let products = [];

// CREATE: Add a new product
router.post('/', (req, res) => {
    const product = req.body;
    products.push(product);
    res.status(201).json(product);
});

// READ: Get all products
router.get('/', (req, res) => {
    res.json(products);
});

// READ: Get a product by ID
router.get('/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found.');
    res.json(product);
});

// UPDATE: Update a product by ID
router.put('/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found.');
    Object.assign(product, req.body);
    res.json(product);
});

// DELETE: Remove a product by ID
router.delete('/:id', (req, res) => {
    products = products.filter(p => p.id !== parseInt(req.params.id));
    res.status(204).send();
});

module.exports = router;