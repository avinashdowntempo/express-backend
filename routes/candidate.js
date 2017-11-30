var express = require('express');
var router = express.Router();
var database = require('../databasecon');
var jwt = require('jsonwebtoken');
var config = require('../config');
var candidate = require('../schemas/candidateschema').CandidateModel;
var ObjectId = require('mongodb').ObjectID;

router.get('/:_id', function (req, res, next) {
  var searchid = req.params._id;
  candidate.find({ position_id: searchid }, function (err, data) {
    if (err) {
      console.log(err);
      res.status(403).end();
    }
    res.status(200).send({ value: data, msg: "updated succesfully" });
  });
});

router.patch('/update', function (req, res, next) {
  console.log(req.body);
  console.log("23232", req.body._id);
  candidate.update({ _id: req.body._id }, req.body, function (err, small) {
    if (err) {
      console.log(err);
      res.status(403).end();
    }
    res.status(200).send({ value: small, msg: "updated succesfully" });
  });
});

router.patch('/delete', function (req, res, next) {
  console.log(req.body);
  console.log("23232", req.body._id);
  candidate.remove({ _id: req.body._id }, function (err, small) {
    if (err) {
      console.log(err);
      res.status(403).end();
    }
    res.status(200).send({ value: small, msg: "updated succesfully" });
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
