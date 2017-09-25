var express = require('express');
var app = express();

// ----------- Body-Parser ---------------
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

path = require('path'); // GLOBAL VARIABLE

// ----------- Static ---------------
app.use(express.static(path.join(__dirname, '/public/dist')));

// ---------- Session ---------------
const session = require('express-session');
app.use(session({ secret: 'mysecretkey' }));

// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');

// Routes now in folder config/server/routes.js
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("listening on port 8000...");
});
