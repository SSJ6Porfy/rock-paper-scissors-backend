const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    owner_id: Number,
    winner_id: Number,
    type: String,
    balance_owed: Number,
    complete: Boolean
});

const Exercise = mongoose.model('exercises', ExerciseSchema);

module.exports = Exercise;