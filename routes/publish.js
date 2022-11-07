var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({message: "homepage reached"});
});

/* GET published blogposts. */
router.get("/", )

module.exports = router;
