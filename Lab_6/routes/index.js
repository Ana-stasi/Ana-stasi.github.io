var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('..public/index.html');
});

router.get('/favicon.ico', (req, res) => {
res.sendfile('');
})
router.get('/', function(req, res, next) {
  res.sendfile('..public/lab_6.html');
});
router.get('/', (req, res) => {
  res.sendfile('../public/script.js');
})
module.exports = router;
