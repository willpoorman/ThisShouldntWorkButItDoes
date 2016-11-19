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

// Preload test
router.param('test', function(req, res, next, id) {
  var query = Test.findById(id);

  query.exec(function (err, test){
    if (err) { return next(err); }
    if (!test) { return next(new Error('can\'t find test')); }

    req.test = test;
    return next();
  });
});

// GET league
router.get('/leagues', function(req, res, next) {
  League.find(function(err, leagues){
    if(err){ return next(err); }

    res.json(leagues);
  });
});

// Post league
router.post('/leagues', function(req, res, next) {
  var league = new League(req.body);

  league.save(function(err, league) {
    if(err) { return next(err); }

    res.json(league);
  });
});

// Preload league
router.param('league', function(req, res, next, id) {
  var query = League.findById(id);

  query.exec(function (err, league){
    if (err) { return next(err); }
    if (!league) { return next(new Error('can\'t find league')); }

    req.league = league;
    return next();
  });
});

// GET match
router.get('/matches', function(req, res, next) {
  Match.find(function(err, matches){
    if(err){ return next(err); }

    res.json(matches);
  });
});

// Post match
router.post('/matches', function(req, res, next) {
  var match = new Match(req.body);

  match.save(function(err, match) {
    if(err) { return next(err); }

    res.json(match);
  });
});

// Preload match
router.param('match', function(req, res, next, id) {
  var query = Match.findById(id);

  query.exec(function (err, match){
    if (err) { return next(err); }
    if (!match) { return next(new Error('can\'t find match')); }

    req.match = match;
    return next();
  });
});

// GET organization
router.get('/organizations', function(req, res, next) {
  Organization.find(function(err, organizations){
    if(err){ return next(err); }

    res.json(organizations);
  });
});

// Post organization
router.post('/organizations', function(req, res, next) {
  var organization = new Organization(req.body);

  organization.save(function(err, organization) {
    if(err) { return next(err); }

    res.json(organization);
  });
});

// Preload organization
router.param('organization', function(req, res, next, id) {
  var query = Organization.findById(id);

  query.exec(function (err, organization){
    if (err) { return next(err); }
    if (!organization) { return next(new Error('can\'t find organization')); }

    req.organization = organization;
    return next();
  });
});

// GET team
router.get('/teams', function(req, res, next) {
  Team.find(function(err, teams){
    if(err){ return next(err); }

    res.json(teams);
  });
});

// Post team
router.post('/teams', function(req, res, next) {
  var team = new Team(req.body);

  team.save(function(err, team) {
    if(err) { return next(err); }

    res.json(team);
  });
});

// Preload team
router.param('team', function(req, res, next, id) {
  var query = Team.findById(id);

  query.exec(function (err, team){
    if (err) { return next(err); }
    if (!team) { return next(new Error('can\'t find team')); }

    req.team = team;
    return next();
  });
});

// GET user
router.get('/users', function(req, res, next) {
  User.find(function(err, users){
    if(err){ return next(err); }

    res.json(users);
  });
});

// Post user
router.post('/users', function(req, res, next) {
  var user = new User(req.body);

  user.save(function(err, user) {
    if(err) { return next(err); }

    res.json(user);
  });
});

// Preload user
router.param('user', function(req, res, next, id) {
  var query = User.findById(id);

  query.exec(function (err, user){
    if (err) { return next(err); }
    if (!user) { return next(new Error('can\'t find user')); }

    req.user = user;
    return next();
  });
});



module.exports = router;
