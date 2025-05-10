var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  /* S_20250510 */
  /* res.render('index', { title: 'Express' }); */
  res.render('index', { title: 'Express 2' });
  /* E_20250510 */
});

module.exports = router;
