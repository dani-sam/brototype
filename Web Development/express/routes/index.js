var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const values=['dani','dona',"jolly","johny"]

  const person={name:"dani",admin:false}

  res.render('index', {person});
});

module.exports = router;
