const express = require('express');
const { loginAdmin } = require('../controllers/adminController');
const router = express.Router();

// Route to handle admin login
router.post('/login', loginAdmin);

module.exports = router;
