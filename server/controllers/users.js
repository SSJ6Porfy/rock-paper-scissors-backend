const User = require("../models/User");

const index = function (req, res) {
    User.find({}).then(function (users) {
        res.send(users);
    });
};

const create = function (req, res) {
    let user = new User({
            userName: req.body.userName,
            email: req.body.email,
            createdAt: Date.now(),
            updatedAt: Date.now()
        }
    );

    user.save(function (err, user) {
        if (err) {
            return res.status(401).send(err);
        }
        res.status(200).send(user);
    });
};

const show = function (req, res) {
    let id = req.params.userId;

    User.findById(id, function(err, user) {
        if (err) {
            return res.status(401).send(err);
        }
        res.status(200).send(user);
    });
};

const destroy = function (req, res) {
    let id = req.params.userId;

    User.findByIdAndRemove(id, function(err) {
        if (err) {
            return res.status(401).send(err);
        }
        res.status(200).send(`User with id: ${id} has been deleted`);
    });    
};

const update = function (req, res) {
    let id = req.params.userId;
    req.body.updatedAt = Date.now();

    User.findByIdAndUpdate(id, { $set: req.body }, { new: true }, function (err, user) {
        if (err) {
            return res.status(401).send(err);
        }
        res.send(user);
    });
};

module.exports = {
    create,
    destroy,
    index,
    show,
    update
}