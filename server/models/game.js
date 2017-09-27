const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let GameSchema = new mongoose.Schema({
    user: { type: String, required: true },
    correct: { type: Number, required: true },
}, { timestamps: true });


mongoose.model('Game', GameSchema);