var express = require('express');
var router = express.Router();
var database = require('../databasecon');
var jwt = require('jsonwebtoken');
var config = require('../config');
var candidate = require('../schemas/candidateschema').CandidateModel;
var ObjectId = require('mongodb').ObjectID;

router.get('/:_id', function (req, res, next) {
    var searchid = req.params._id;
    candidate.find({ position_id: searchid },function (err, data) {
        if (err) {
          console.log(err);
          res.status(403).end();
        }
        res.status(200).send({ value: data, msg: "updated succesfully" });
      });
  });

router.post('/new', function (req, res, next) {
  console.log(req.body);
   candidate.create(req.body, function (err, data) {
    if (err) {
      console.log(err);
      res.status(403).end();
    }
    res.status(200).send({ value: data, msg: "updated succesfully" });
  });
});



module.exports = router;
