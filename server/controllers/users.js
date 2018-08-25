const User = require("../models/users");

const user_create = function (req, res) {
    let user = new User({
            username: req.body.username,
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

const user_show = function (req, res) {

    let id = req.body.id;

    User.findById(id, function(error, user) {
        if (error) {
            next(err)
        }
        res.send(user);
    });
};


module.exports = {
    user_create,
    user_show
}