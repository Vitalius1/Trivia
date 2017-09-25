var user = require('../controllers/user_controller.js');
var bike = require('../controllers/bike_controller.js');
module.exports = function (app) {
    
    // app.get('/logout.json', (req, res) => {
    //     console.log("GET /logout.json");
    //     user.logout(req, res);
    // });

    // app.get('/checkSession.json', (req, res) => {
    //     console.log("GET /checkSession.json");
    //     user.checkSession(req, res);
    // });

    // app.get('/getuserbikes.json/:id', (req, res) => {
    //     console.log("GET /getuserbikes/user_id.json");
    //     bike.oneUserBikes(req, res);
    // });

    // app.post('/register.json', (req, res) => {
    //     console.log("POST /register.json");
    //     user.register(req, res);
    // });

    // app.post('/createbike.json/:id', (req, res) => {
    //     console.log("POST /createbike.json");
    //     bike.create(req, res);
    // });

    // app.post('/login.json', (req, res) => {
    //     console.log("POST /login.json");
    //     user.login(req, res);
    // });

    // app.delete('/players.json/:id', (req, res) => {
    //     console.log("DELETE /players.json");
    //     player.delete(req, res);
    // });
    // app.put('/players.json', (req, res) => {
    //     console.log("PUT /players.json");
    //     player.update(req, res);
    // });

    app.all("*", (req, res) => {
        res.sendFile(path.resolve("./public/dist/index.html"));
    });
};