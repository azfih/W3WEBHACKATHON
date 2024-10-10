const Product = require('../models/Product');
const User = require('../models/User.js');

// Handle product submission and price estimation
exports.submitProduct = async (req, res) => {
    const {
        userId,
        deviceType,
        brand,
        model,
        yearOfPurchase,
        condition,
        storageCapacity,
        defects,
        serialNumber,
        pictures,
        pickup,
    } = req.body;

    // Check if the user is verified
    const user = await User.findById(userId);
    if (!user || !user.isVerified) {
        return res.status(403).json({ message: 'User must be verified to submit a product.' });
    }

    // Calculate the estimated price
    const estimatedPrice = calculateEstimatedPrice(brand, condition, storageCapacity, pickup);

    // Create a new product entry
    try {
        const product = new Product({
            userId: user._id,
            deviceType,
            brand,
            model,
            yearOfPurchase,
            condition,
            storageCapacity,
            defects,
            serialNumber,
            pictures,
            pickup,
            estimatedPrice,
            status: 'Pending', // Initial status
        });

        await product.save();
        res.status(201).json({ message: 'Product submitted successfully!', product });
    } catch (error) {
        console.error('Error submitting product:', error.message);
        res.status(500).json({ error: 'Server Error' });
    }
};

// Function to calculate the estimated price
const calculateEstimatedPrice = (brand, condition, storageCapacity, pickup) => {
    // Example base prices by brand
    const basePrices = {
        "Apple": 800,
        "Samsung": 600,
        "Google": 500,
        "OnePlus": 400,
        "Dell": 700,
        "HP": 650,
        "Lenovo": 600,
    };

    let basePrice = basePrices[brand] || 300; // Default if brand is unknown

    // Adjust based on condition
    switch (condition) {
        case 'new':
            break; // No adjustment
        case 'used':
            basePrice -= basePrice * 0.2; // 20% deduction for used
            break;
        case 'damaged':
            basePrice -= basePrice * 0.5; // 50% deduction for damaged
            break;
        default:
            break;
    }

    // Adjust based on storage capacity
    if (storageCapacity === '64GB') {
        basePrice += 20; // Small increase for 64GB
    } else if (storageCapacity === '128GB') {
        basePrice += 50; // Increase for 128GB
    } else if (storageCapacity === '256GB') {
        basePrice += 100; // Increase for 256GB
    }

    // Add pickup fees if selected
    if (pickup) {
        basePrice += 30; // Example pickup fee
    }

    return Math.max(basePrice, 0); // Ensure price doesn't go negative
};
