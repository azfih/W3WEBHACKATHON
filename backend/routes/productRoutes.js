const express = require('express');
const { submitProductRequest, acceptProductRequest } = require('../controllers/productController');
const router = express.Router();

// Route to handle product request submission and estimation
router.post('/submit', submitProductRequest);

// Route to accept the product request
router.post('/accept', acceptProductRequest);

module.exports = router;
