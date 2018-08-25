const Game = require("../models/games");

const gameCreate = function (req, res) {
    
    let game = new Game({
        playerOneId: req.body.playerOneId,
        playerTwoId: req.body.playerTwoId,    
    });

    game.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send(game);
    });
};

const gameShow = function (req, res) {

    let id = req.body.id;

    Game.findById(id, function(error, game) {
        if (error) {
            next(err)
        }
        res.send(game);
    });
};


module.exports = {
    gameCreate,
    gameShow
}