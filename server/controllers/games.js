const Game = require("../models/games");

const game_create = function (req, res) {
    
    let game = new Game({
        player_one_id: req.body.playerOneId,
        player_two_id: req.body.playerTwoId,    
    });

    game.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send(game);
    });
};

const game_show = function (req, res) {

    let id = req.body.id;

    Game.findById(id, function(error, game) {
        if (error) {
            next(err)
        }
        res.send(game);
    });
};


module.exports = {
    game_create,
    game_show
}