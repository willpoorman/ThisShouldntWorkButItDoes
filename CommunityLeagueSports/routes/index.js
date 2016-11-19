var express = require('express');
var router = express.Router();

// Database variables
var mongoose = require('mongoose');
var Test = mongoose.model('Test');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET tests
router.get('/tests', function(req, res, next) {
  Test.find(function(err, tests){
    if(err){ return next(err); }

    res.json(tests);
  });
});

// Post tests
router.post('/tests', function(req, res, next) {
  var test = new Test(req.body);

  test.save(function(err, test) {
    if(err) { return next(err); }

    res.json(test);
  });
});

module.exports = router;
