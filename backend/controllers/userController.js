const User = require('../models/User');
const crypto = require('crypto');
const sendVerificationEmail = require('../utils/sendEmail');

//Handle user form submission
exports.submitUserForm = async (req, res) => {
  try {
      const { name, cnic, phone, email } = req.body;

      let user = await User.findOne({ email });
      if (user) {
          return res.status(400).json({ message: 'User already exists!' });
      }

      const verificationToken = crypto.randomBytes(32).toString('hex');

      user = new User({ name, cnic, phone, email, verificationToken });
      await user.save();

      const verificationUrl = `http://localhost:4000/api/olx/verify/${verificationToken}`;
      
      try {
          await sendVerificationEmail(user.email, verificationUrl);
          res.status(200).json({ message: 'Verification email sent!' });
      } catch (emailError) {
          console.error('Error sending verification email:', emailError.message);
          return res.status(500).json({ error: 'Failed to send verification email.' });
      }

  } catch (error) {
      console.error('Error during form submission:', error.message);
      res.status(500).json({ error: 'Server Error' });
  }
};
// Handle email verification
exports.verifyEmail = async (req, res) => {
    try {
      const { token } = req.params;
      const user = await User.findOne({ verificationToken: token });
  
      if (!user) {
        return res.status(400).json({ message: 'Invalid or expired token!' });
      }
  
      user.isVerified = true;
      user.verificationToken = undefined;
      await user.save();
  
      res.status(200).json({ message: 'Email verified successfully!' });
    } catch (error) {
      console.error('Error during email verification:', error.message);  // Log detailed error
      res.status(500).json({ error: 'Server Error', details: error.message });
    }
  };
  
