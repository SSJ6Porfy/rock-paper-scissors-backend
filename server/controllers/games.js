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

const destroy = function (req, res) {
    let id = req.params.gameId;

    Game.findByIdAndRemove(id, function(err) {
        if (err) {
            return res.status(401).send(err);
        }
        res.status(200).send(`Game with id: ${id} has been deleted`);
    });    
};


module.exports = {
    create,
    destroy,
    index,
    show
}