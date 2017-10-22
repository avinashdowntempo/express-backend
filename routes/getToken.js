var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name
     };
     console.log(response);
     res.json(response);
  });


module.exports = router;
