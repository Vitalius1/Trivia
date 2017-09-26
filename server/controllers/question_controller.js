var mongoose = require('mongoose');
var Question = mongoose.model("Question");

module.exports = {
    createQ: function (req, res) {
        Question.create(req.body, (err, question) => {
            if (err) {
                console.log("creation ERROR", err);
                res.json(err);
            } else {
                console.log("question CREATED");
                res.json(question);
            }

        });
    },
    getRandomQ: function (req, res) {
        Question.findRandom({},{},{limit: 3}, function (err, questions) {
            if (err) {
                console.log('something went wrong with getting all', err);
                res.json(err);
            } else {
                console.log('successfully got 3 random questions!');
                res.json(questions);
            }
        });
    },
};