const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Admin schema
const adminSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true, // Ensure that usernames are unique
    },
    password: {
        type: String,
        required: true,
    }
});

// Export the Admin model
module.exports = mongoose.model('Admin', adminSchema);
