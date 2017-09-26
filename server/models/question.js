const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const random = require('mongoose-simple-random');

let QuestionSchema = new mongoose.Schema({
    question: { type: String, required: true, minlength: 15 },
    correct: { type: String, required: true },
    fake1: { type: String, required: true },
    fake2: { type: String, required: true },
}, { timestamps: true });

QuestionSchema.plugin(random);

mongoose.model('Question', QuestionSchema);