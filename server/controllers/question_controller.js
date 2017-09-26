var mongoose = require('mongoose');
var Question = mongoose.model("Question");

module.exports = {
    createQ: function (req, res) {
        Question.create(req.body, (err, question) => {
            if (err) {
                console.log("ERROROROROR", err);
                res.json(err);
            } else {
                console.log("question CREATED");
                Question.find({}, function (err, questions) {
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
};