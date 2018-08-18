const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    player_one_id: {
        type: String,
        required: [true, 'Owner Id cannot be blank']
    },
    player_two_id: {
        type: String,
        required: [true, 'Owner Id cannot be blank']
    },
    moves: {
        type: String
    },
    complete: {
        type: Boolean,
        required: [true, 'complete cannot be blank'],
        default: false
    },
    winner: {
        type: String,
        required: [true, 'Owner Id cannot be blank']
    }
});

const Game = mongoose.model('games', GameSchema);

module.exports = Game;
