const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User', // Reference to the User model
    },
    deviceType: {
        type: String,
        required: true, // e.g., smartphone, tablet, laptop
    },
    brand: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    yearOfPurchase: {
        type: Number,
        required: true,
    },
    condition: {
        type: String,
        enum: ['new', 'used', 'damaged'],
        required: true,
    },
    storageCapacity: {
        type: String,
        required: true, // e.g., "64GB", "128GB"
    },
    defects: {
        type: [String], // Store defects as an array of strings
        default: [],
    },
    serialNumber: {
        type: String,
        required: true,
    },
    pictures: {
        type: [String], // Array to store image URLs
        default: [],
    },
    pickup: {
        type: Boolean,
        default: false,
    },
    estimatedPrice: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['Pending', 'Accepted', 'Rejected'],
        default: 'Pending',
    },
});

module.exports = mongoose.model('Product', productSchema);
