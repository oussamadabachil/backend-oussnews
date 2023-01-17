var express = require('express');
var router = express.Router();

require("../models/connection")
const User = require("../models/users")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express v2 Espérons que ca marchr' });
});


    





module.exports = router;
