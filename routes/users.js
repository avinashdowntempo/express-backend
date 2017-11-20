var express = require('express');
var router = express.Router();
var database = require('../databasecon');
var jwt = require('jsonwebtoken');
var config = require('../config');
var token = jwt.sign({ name: 'avinash' }, 'shhhhh');
var token2 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYXZpbmFzaCIsImlhdCI6MTUwODE4MDQ2NSwicGFzc3dvcmQiOiJpLWFtLWEtc2VjcmV0In0.soC42JR6LoHNvYIOwRyyLWcFvrUb_nRAZ8ABsRggpoA";

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

let response = {
  status: 200,
  data: [],
  message: null
};

router.get('/users', (req, res) => {
  database.connection((db) => {
    db.collection('users')
      .find()
      .toArray()
      .then((users) => {
        response.data = users;

        //token
        console.log(token);
        jwt.verify(token2, 'shhhhh', function (err, decoded) {
          if (err) {
            console.log("token not validooooooooooooooooo");
            res.send("token no valid");
          }
          else {
            console.log(decoded.name);
            console.log(decoded.foo);
            console.log(decoded.password);
            res.json(response);
          }
        });
      })
      .catch((err) => {
        sendError(err, res);
      });
  });
});



module.exports = router;
