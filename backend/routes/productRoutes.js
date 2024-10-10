const express = require('express');
const { submitProduct, acceptProduct, getUserRequests} = require('../controllers/productController');
const router = express.Router();

// Route to handle product submission
router.post('/submit', submitProduct);

// Route to accept the product submission
router.post('/accept', acceptProduct);
// Route to get all requests for a specific user
router.get('/user-requests/:userId', getUserRequests); // New route for getting user requests

module.exports = router;
