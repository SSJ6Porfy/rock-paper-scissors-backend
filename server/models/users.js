const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Users Model and Schema 

const UsersSchema = new Schema({
    userName: String,
    email: String,
    wins: Number,
    losses: Number
});

const User = mongoose.model('users', UsersSchema);

module.exports = User;