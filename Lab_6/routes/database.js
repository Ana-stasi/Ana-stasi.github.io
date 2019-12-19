var express = require('express');
var router = express.Router();
const db = require('../db.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
 // res.send('respond with a resource');
  db.all('SELECT * FROM userLoginDb', (err,rows) => (res.send(rows)));
});

module.exports = router;
