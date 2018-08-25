const User = require("../models/users");

const userCreate = function (req, res) {
    let user = new User({
            userName: req.body.username,
            email: req.body.email
        }
    );

    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('User Created successfully')
    });
};

const userShow = function (req, res) {

    let id = req.body.id;

    User.findById(id, function(error, user) {
        if (error) {
            next(err)
        }
        res.send(user);
    });
};


module.exports = {
    userCreate,
    userShow
}