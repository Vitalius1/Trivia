const mongoose = require('mongoose');
const bcrypt = require('bcrypt-as-promised');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;


let UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        minlength: [2, 'First name should be at least 2 characters long'],
        required: [true, 'Please include your first name.'],
        match: [/^[a-zA-Z]+$/, 'First name can be only letter characters']
    },
    last_name: {
        type: String,
        minlength: [2, 'Last name should be at least 3 characters long'],
        required: [true, 'Please include your last name.'],
        match: [/^[a-zA-Z]+$/, 'Last name can be only letter characters']
    },
    email: {
        type: String,
        required: [true, 'Please include your email.'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        minlength: [8, 'Password should be at least 8 characters long'],
        required: [true, 'Please include your password.']
    },
    bikes: [{ type: Schema.Types.ObjectId, ref: 'Bike' }]
}, { timestamps: true });

mongoose.model('User', UserSchema);