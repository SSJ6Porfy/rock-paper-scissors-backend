const Exercise = require("../models/Exercise");

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
        balanceOwed: req.body.balanceOwed,
        createdAt: Date.now(),
        updatedAt: Date.now()
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

const destroy = function (req, res) {
    let id = req.params.exerciseId;

    Exercise.findByIdAndRemove(id, function(err) {
        if (err) {
            return res.status(401).send(err);
        }
        res.status(200).send(`Exercise with id: ${id} has been deleted`);
    });    
};

const update = function (req, res) {
    let id = req.params.exerciseId;
    
    req.body.updatedAt = Date.now();

    Exercise.findByIdAndUpdate(id, { $set: req.body }, { new: true }, function (err, exercise) {
        if (err) {
            return res.status(401).send(err);
        }
        res.send(exercise);
    });
};


module.exports = {
    create,
    destroy,
    index,
    show,
    update
}