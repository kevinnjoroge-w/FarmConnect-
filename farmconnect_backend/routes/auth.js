const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Mock user database
const users = [];

// User registration
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }
    // Check if user already exists
    const exists = users.find(user => user.username === username);
    if (exists) {
        return res.status(400).json({ message: 'User already exists.' });
    }
    // Create new user
    const newUser = { username, password }; // In real application, store hashed password
    users.push(newUser);
    res.status(201).json({ message: 'User registered successfully!' });
});

// User login
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username);
    if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid username or password.' });
    }
    // Create JWT token
    const token = jwt.sign({ username }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token });
});

module.exports = router;