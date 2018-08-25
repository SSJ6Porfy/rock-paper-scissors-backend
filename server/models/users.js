const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');

// Users Model and Schema 

const UserSchema = new Schema({
    userName: {
        type: String,
        required: [true, 'Username cannot be blank'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Email cannot be blank'],
        unique: true
    },
    wins: {
        type: Number,
        required: [true, 'Wins cannot be blank'],
        default: 0
    },
    losses: {
        type: Number,
        required: [true, 'Losses cannot be blank'],
        default: 0
    },
    createdAt: Date,
    updatedAt: Date
});


UserSchema.methods.generateToken = function () {
    const user = this;
  
    // 1 week expiration
    const token = jwt.sign(
      { _id: user._id }, 
      process.env.JWT_TOKEN || 'supersecretkey', 
      { expiresIn: 604800 }
    );
    return `JWT ${token}`;
  };

const User = mongoose.model('users', UserSchema);

module.exports = User;