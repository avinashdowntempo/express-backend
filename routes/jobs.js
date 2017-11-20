var express = require('express');
var router = express.Router();
var database = require('../databasecon');
var jwt = require('jsonwebtoken');
var config = require('../config');
var job = require('../schemas/jobschema').JobModel;



router.post('/new', function (req, res, next) {
  console.log(req.body);
  console.log("23232", req.body.email);
  job.create(req.body, function (err, small) {
    if (err) {
      console.log(err);
      res.status(403).end();
    }
    res.status(200).send({ value: small, msg: "updated succesfully" });
  });
  console.log(job);
});

module.exports = router;
