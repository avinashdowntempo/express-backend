var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
var jwt = require('jsonwebtoken');

var token=jwt.sign({ name: 'avinash' }, 'shhhhh');;
var token2="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYXZpbmFzaCIsImlhdCI6MTUwODE4MDQ2NSwicGFzc3dvcmQiOiJpLWFtLWEtc2VjcmV0In0.soC42JR6LoHNvYIOwRyyLWcFvrUb_nRAZ8ABsRggpoA";
const connection = (closure) => {
  return MongoClient.connect('mongodb://localhost:27017/mean', (err, db) => {
      if (err) return console.log(err);

      closure(db);
  });
};
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

let response = {
  status: 200,
  data: [],
  message: null
};

router.get('/users', (req, res) => {
  connection((db) => {
      db.collection('users')
          .find()
          .toArray()
          .then((users) => {
              response.data = users;
              
              //token
              console.log(token);
              jwt.verify(token2, 'shhhhh', function(err, decoded) {
                if(err){
                  console.log("token not validooooooooooooooooo");
                  res.send("token no valid");
                }
                else{
                  console.log(decoded.name);
                  console.log(decoded.foo); 
                  console.log(decoded.password);
                  res.json(response);
                }
              });
              /*try {
                var decoded = jwt.verify(token2, 'shhhhh');
                console.log(decoded.header);
                
              } catch(err) {
                console.log("token not valid");
              }*/
          })
          .catch((err) => {
              sendError(err, res);
          });
  });
});



module.exports = router;
