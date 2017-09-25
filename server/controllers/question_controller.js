var mongoose = require('mongoose');
var Question = mongoose.model("Question");
var User = mongoose.model("User");

module.exports = {
    createQ: function (req, res) {
        Question.create(req.body, (err, question)=>{
            if(err){
                console.log("ERROROROROR", err);
                res.json(err);
            } else {
                console.log("question CREATED");
                Question.find({}, function (err, questions){
                    console.log("Sendind all questions after adding one");
                    res.json(questions);
                });
            }
            
        });
    },
    getAllQ: function (req, res) {
        Question.find({}, function (err, questions) {
            if (err) {
                console.log('something went wrong with getting all', err);
                res.json(err);
            } else {
                console.log('successfully found all bikes!');
                res.json(questions);
            }
        });
    },
    // oneUserBikes: function (req, res) {
    //     User.findOne({ _id: req.params.id }).populate('bikes').exec(function (err, logged_user) {
    //         if (err) {
    //             console.log("Something wrong with finding bikes of logged user");
    //         } else {
    //             console.log('Found all bikes of logged user');
    //             res.json(logged_user);
    //         }
    //     });
    // },
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