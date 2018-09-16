const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');

// Users Model and Schema

const UserSchema = new Schema({
    google: {
        id: {
            type: String
        }
    },
    facebook: {
        id: {
            type: String
        }
    },
    method: {
        type: String,
        enum: ['google', 'facebook'],
        required: true
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
    // 1 week expiration
    const user = this;

    const token = jwt.sign({
        iss: 'gimme5socialFitness',
        sub: user._id,
        iat: new Date().getTime(), // current time
        exp: new Date().setDate(new Date().getDate() + 6) // current time + 1 day ahead
    }, process.env.JWT_SECRET);

    return token;
};

const User = mongoose.model('users', UserSchema);

module.exports = User;