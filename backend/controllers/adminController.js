const Admin = require('../models/Admin');

// Handle admin login
exports.loginAdmin = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find the admin by username
        const admin = await Admin.findOne({ username });
        if (!admin) {
            return res.status(401).json({ message: 'Invalid username or password.' });
        }

        // Check if the password matches (you might want to hash passwords in a real app)
        if (admin.password !== password) {
            return res.status(401).json({ message: 'Invalid username or password.' });
        }

        // If credentials are valid, respond with success
        res.status(200).json({ message: 'Admin logged in successfully!', adminId: admin._id });
    } catch (error) {
        console.error('Error during admin login:', error.message);
        res.status(500).json({ error: 'Server error.' });
    }
};
