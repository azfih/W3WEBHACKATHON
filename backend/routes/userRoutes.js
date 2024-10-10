const express = require('express');
const { submitUserForm, verifyEmail } = require('../controllers/userController');
const router = express.Router();

// Route to handle user form submission
router.post('/submit', submitUserForm);

// Route to handle email verification
router.get('/verify/:token', verifyEmail);

module.exports = router;
