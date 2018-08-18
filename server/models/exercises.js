const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    owner_id: {
        type: String,
        required: [true, 'Owner Id cannot be blank']
    },
    winner_id: {
        type: String,
        required: [true, 'Winner Id cannot be blank']
    },
    type: {
        type: String,
        required: [true, 'Type cannot be blank']
    },
    balance_owed: {
        type: Number,
        required: [true, 'Balance Owed cannot be blank'],
        default: 0
    },
    complete: {
        type: Boolean,
        required: [true, 'complete cannot be blank'],
        default: false
    },
    created_at: Date,
    updated_at: Date
});

const Exercise = mongoose.model('exercises', ExerciseSchema);

module.exports = Exercise;