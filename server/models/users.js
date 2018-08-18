const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Users Model and Schema 

const UsersSchema = new Schema({
    username: {
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
    }
});

const User = mongoose.model('users', UsersSchema);

module.exports = User;