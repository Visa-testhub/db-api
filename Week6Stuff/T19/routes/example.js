const express = require('express');
const router = express.Router();

// GET without parameters
router.get('/', function(req, res) {
  res.send('GET request to the example route works!');
});

// Middleware example
router.use('/',
  function(req, res, next){
  console.log('Middleware 1 executed for /example route');
  next();
});

// GET with one parameter
router.get('/:param', function(req, res) {
  const param = req.params.param;
  res.send(`GET request to the example route with one parameter: ${param}`);
});

// Middleware example
router.use('/',
  function(req, res, next){
  console.log('Middleware 2 executed for /example route');
  next();
});

// GET with two parameters
router.get('/:first/:second', function(req, res) {
  const first = req.params.first;
  const second = req.params.second;
  res.send(`GET request to the example route with two parameters. First: ${first} and Second: ${second}`);
});

// Middleware example
router.use('/',
  function(req, res, next){
  console.log('Middleware 3 executed for /example route');
  next();
});

// POST method
router.post('/', function(req, res) {
  res.send(req.body);
  console.log('Received POST data:', req.body);
});

module.exports = router;