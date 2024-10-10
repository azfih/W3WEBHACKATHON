const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  cnic: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  verificationToken: {
    type: String,
  },
});

module.exports = mongoose.model('User', userSchema);
