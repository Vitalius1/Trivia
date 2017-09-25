var mongoose = require('mongoose');
var User = mongoose.model("User");

module.exports = {

    register: (req, res) => {
        User.findOne({ email: req.body.email }, (err, user) => {
            if (err) {
                console.log("Registration unsuccessuful because of error: ", err);
                res.json(err);
            }
            else if (user) {
                console.log("Email already in use");
                res.json({ userExists: true });
            }
            else {
                User.create(req.body, (err, user) => {
                    if (err) {
                        res.json(err);
                    }
                    console.log('Registered with success');
                    req.session.user_id = user._id;
                    res.json({ user_id: user._id });
                });
            }
        });
    },

    login: (req, res) => {
        console.log("USER to check", req.body);
        User.findOne({ email: req.body.email }, (err, user) => {
            if (err) {
                res.json({ loginError: true });
            }
            else if (user) {
                console.log("FOUND USER now Cheking Password");
                if (req.body.password === user.password) {
                    console.log("PASSWORD MATCHED");
                    req.session.user_id = user._id;
                    res.json({ user_id: user._id });
                } else {
                    console.log("PASSWORD NOT MACHED");
                    res.json({ loginError: true });
                }
            }
            else {
                console.log("USER NOT FOUND");
                res.json({ loginError: true });
            }
        });
    },

    logout: (req, res) => {
        req.session.destroy();
        console.log("Session TERMINATED");
        res.json(true);
    },

    checkSession: (req, res) => {
        if (req.session.user_id) {
            res.json({ user_id: req.session.user_id });
        } else {
            res.json({ isLogged: false });
        }
    }
};