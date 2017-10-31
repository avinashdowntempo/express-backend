var express = require('express');
var router = express.Router();
var database = require('../databasecon');
var jwt = require('jsonwebtoken');



/* GET home page. */
router.post('/', function (req, res, next) {
    var response;
    console.log(response);
    console.log(req.app.get('superSecret'));
    database.connection((db) => {
        db.collection('users')
            .findOne({ email: req.body.first_name })
            .then((users) => {
                const payload = {
                    email: users.email,
                    name: users.name,
                    role: users.role
                };
                var token = jwt.sign(payload, req.app.get('superSecret'));
                console.log('received token', req.body.token);
                console.log('payload', payload);
                console.log('payload token:', token);
                response = {
                    first_name: req.body.first_name,
                    token: token
                };
                res.json(response);
                jwt.verify(token, req.app.get('superSecret'), function (err, decoded) {
                    if (err) {
                        console.log("token not validooooooooooooooooo");
                        res.send("token no valid");
                    }
                    else {
                        console.log("token valid");
                        console.log(decoded);
                    }
                });
            })
            .catch((err) => {
                console.log(err);
            });
    });






});


module.exports = router;
