const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    playerOneId: {
        type: String,
        required: [true, 'Owner Id cannot be blank']
    },
    playerTwoId: {
        type: String,
        required: [true, 'Owner Id cannot be blank']
    },
    moves: {
        type: Array
    },
    complete: {
        type: Boolean,
        required: [true, 'complete cannot be blank'],
        default: false
    },
    winner: {
        type: String,
    },
    createdAt: Date,
    updatedAt: Date
});

const Game = mongoose.model('games', GameSchema);

module.exports = Game;
