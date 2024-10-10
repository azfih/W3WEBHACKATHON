const ProductRequest = require('../models/ProductRequest');
const User = require('../models/User.js');
const axios = require('axios'); // Ensure axios is installed

// Handle product request submission and price estimation
exports.submitProductRequest = async (req, res) => {
    const { userId, productName, productCategory, productCondition, storageCapacity, defects } = req.body;

    // Check if the user is verified
    const user = await User.findById(userId);
    if (!user || !user.isVerified) {
        return res.status(403).json({ message: 'User must be verified to submit a product request.' });
    }

    // Calculate the estimated price from an external source
    const estimatedPrice = await calculateEstimatedPrice(productName, productCondition, storageCapacity);

    // Respond with the estimated price and ask for acceptance
    res.status(200).json({
        estimatedPrice,
        message: 'Please accept or reject the estimated price.',
    });
};

// Function to calculate the estimated price from an external API or logic
const calculateEstimatedPrice = async (productName, productCondition, storageCapacity) => {
    let basePrice = 100; // Base price for demonstration

    // Example of getting the original price from an API (replace with actual API)
    // const response = await axios.get(`https://api.example.com/products/${productName}`);
    // const originalPrice = response.data.price;

    // Here we'll just mock the pricing logic instead
    if (productCondition === 'used') basePrice -= 20;
    if (productCondition === 'damaged') basePrice -= 50;

    // Adjust price based on storage capacity
    if (storageCapacity === '256GB') basePrice += 30;

    return basePrice;
};

// New method to accept the price and save the product request
exports.acceptProductRequest = async (req, res) => {
    const { userId, productName, productCategory, productCondition, storageCapacity, defects, estimatedPrice } = req.body;

    // Check if the user is verified
    const user = await User.findById(userId);
    if (!user || !user.isVerified) {
        return res.status(403).json({ message: 'User must be verified to submit a product request.' });
    }

    try {
        const productRequest = new ProductRequest({
            user: user._id,
            productName,
            productCategory,
            productCondition,
            storageCapacity,
            defects,
            estimatedPrice, // Save the accepted estimated price
            status: 'Accepted', // Set status to accepted
        });

        await productRequest.save();
        res.status(201).json({ message: 'Product request submitted successfully!', productRequest });
    } catch (error) {
        console.error('Error submitting product request:', error.message);
        res.status(500).json({ error: 'Server Error' });
    }
};
