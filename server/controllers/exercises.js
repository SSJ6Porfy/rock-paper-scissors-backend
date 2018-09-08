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
            return res.status(401).send(err);
        }
        res.send(exercise);
    });
};

const show = function (req, res) {

    let id = req.body.id;

    Exercise.findById(id, function(err, exercise) {
        if (err) {
            return res.status(401).send(err);
        }
        res.send(exercise);
    });
};


module.exports = {
    create,
    index,
    show
}