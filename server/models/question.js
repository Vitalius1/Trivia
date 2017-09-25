const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let QuestionSchema = new mongoose.Schema({
    question: { type: String, required: true, minlength: 15 },
    correct: { type: String, required: true },
    fake1: { type: String, required: true },
    fake2: { type: String, required: true },
}, { timestamps: true });

mongoose.model('Question', QuestionSchema);