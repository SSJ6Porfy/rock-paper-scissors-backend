const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
    player_one_id: Number,
    player_two_id: Number,
    moves: Array,
    complete: Boolean,
    winner: Number
});

const Game = mongoose.model('games', GameSchema);

module.exports = Game;
