var mongoose = require('mongoose');
var Game = mongoose.model("Game");

module.exports = {

    createGame: (req, res) => {
        Game.create(req.body, (err, game) => {
            if (err) {
                console.log("Error creating game", err);
                res.json(err);
            } else {
                console.log('Game created with success');
                Game.find({}, function (err, games) {
                    if (err) {
                        console.log(err);
                    } else {
                        res.json(games);
                    }
                });
            }
        });
    },

    allGames: (req, res) => {
        Game.find({}, function (err, games) {
            if (err) {
                console.log("GOT ALL THE GAMES ERROR");
                console.log(err);
            } else {
                console.log("GOT ALL THE GAMES");
                res.json(games);
            }
        });
    }


};