var express = require('express');
var router = express.Router();
// const mongoose = require("mongoose");
// const morgan = require("morgan");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  // console.log("Server is running");
});

module.exports = router;
