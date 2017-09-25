const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

let BikeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    image_url: { type: String, required: true },
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

mongoose.model('Bike', BikeSchema);