const Game = require("../models/games");

const index = function (req, res) {
    Game.find({}).then(function (games) {
        res.send(games);
    });
};

const create = function (req, res) {
    
    let game = new Game({
        playerOneId: req.body.playerOneId,
        playerTwoId: req.body.playerTwoId,    
    });

    game.save(function (err) {
        if (err) {
            return res.status(401).send(err);
        }
        res.send(game);
    });
};

const show = function (req, res) {

    let id = req.body.id;

    Game.findById(id, function(err, game) {
        if (err) {
            return res.status(401).send(err);
        }
        res.send(game);
    });
};


module.exports = {
    create,
    index,
    show
}