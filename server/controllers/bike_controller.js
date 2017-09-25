var mongoose = require('mongoose');
var Bike = mongoose.model("Bike");
var User = mongoose.model("User");

module.exports = {
    getAll: function (req, res) {
        Bike.find({}, function (err, bikes) {
            if (err) {
                console.log('something went wrong with showing all', err);
                res.json(err);
            } else {
                console.log('successfully found all bikes!');
                res.json(bikes);
            }
        });
    },
    create: function (req, res) {
        User.findOne({ _id: req.params.id }, function (err, user) {
            var bike = new Bike(req.body);
            bike._user = user._id;
            bike.save(function (err) {
                user.bikes.push(bike);
                user.save(function (err) {
                    if (err) {
                        console.log('something went wrong with creation');
                        res.json(err);
                    } else {
                        User.findOne({ _id: req.params.id }).populate('bikes').exec(function (err, logged_user) {
                            console.log('successfully added a bike!');
                            res.json(logged_user);
                        });
                    }
                });
            });
        });
    },
    oneUserBikes: function (req, res) {
        User.findOne({ _id: req.params.id }).populate('bikes').exec(function (err, logged_user) {
            if (err) {
                console.log("Something wrong with finding bikes of logged user");
            } else {
                console.log('Found all bikes of logged user');
                res.json(logged_user);
            }
        });
    },
    // delete: function (req, res) {
    //     Bike.findByIdAndRemove(req.params.id, function (err) {
    //         if (err) {
    //             res.json(err);
    //             console.log('something went wrong with deletion');
    //         } else {
    //             Bike.find({}, function (err, bikes) {
    //                 console.log('successfully deleted a bike!');
    //                 res.json(bikes);
    //             });
    //         }
    //     });
    // },
    // update: function (req, res) {
    //     Bike.findByIdAndUpdate(req.body._id, { $set: { game1: req.body.game1, game2: req.body.game2, game3: req.body.game3 } }, function (err) {
    //         if (err) {
    //             res.json(err);
    //             console.log('something went wrong with updating');
    //         } else {
    //             Bike.find({}, function (err, bikes) {
    //                 console.log('successfully updated a bike!');
    //                 res.json(bikes);
    //             });
    //         }
    //     });
    // },
};