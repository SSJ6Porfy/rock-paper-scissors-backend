const Exercise = require("../models/exercises");

const exerciseCreate = function (req, res) {
    
    let exercise = new Exercise({
        ownerId: req.body.ownerId,
        opponentId: req.body.opponentId,
        type: req.body.type,
        balanceOwed: req.body.balanceOwed    
    });

    exercise.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send(exercise);
    });
};

const exerciseShow = function (req, res) {

    let id = req.body.id;

    Exercise.findById(id, function(error, exercise) {
        if (error) {
            next(err)
        }
        res.send(exercise);
    });
};


module.exports = {
    exerciseCreate,
    exerciseShow
}