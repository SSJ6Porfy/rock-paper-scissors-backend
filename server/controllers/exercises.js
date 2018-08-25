const Exercise = require("../models/exercises");

const exercise_create = function (req, res) {
    
    let exercise = new Exercise({
        owner_id: req.body.ownerId,
        opponent_id: req.body.opponentId,
        type: req.body.type,
        balance_owed: req.body.balanceOwed    
    });

    exercise.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send(exercise);
    });
};

const exercise_show = function (req, res) {

    let id = req.body.id;

    Exercise.findById(id, function(error, exercise) {
        if (error) {
            next(err)
        }
        res.send(exercise);
    });
};


module.exports = {
    exercise_create,
    exercise_show
}