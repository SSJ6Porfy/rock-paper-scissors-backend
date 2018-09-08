const Exercise = require("../models/exercises");

const index = function (req, res) {
    Exercise.find({}).then(function (exercises) {
        res.send(exercises);
    });
};

const create = function (req, res) {
    
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

const show = function (req, res) {

    let id = req.body.id;

    Exercise.findById(id, function(error, exercise) {
        if (error) {
            next(err)
        }
        res.send(exercise);
    });
};


module.exports = {
    create,
    index,
    show
}