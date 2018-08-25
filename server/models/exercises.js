const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    ownerId: {
        type: String,
        required: [true, 'Owner Id cannot be blank']
    },
    opponentId: {
        type: String,
        required: [true, 'Opponent Id cannot be blank']
    },
    type: {
        type: String,
        required: [true, 'Type cannot be blank']
    },
    balanceOwed: {
        type: Number,
        required: [true, 'Balance Owed cannot be blank'],
        default: 0
    },
    complete: {
        type: Boolean,
        required: [true, 'complete cannot be blank'],
        default: false
    },
    createdAt: Date,
    updatedAt: Date
});

const Exercise = mongoose.model('exercises', ExerciseSchema);

module.exports = Exercise;