var express = require("express");
var router = express.Router();

require("../models/connection");

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express v2 Espérons que ca marchr" });
});

module.exports = router;
