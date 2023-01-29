var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  fetch(
    `https://newsapi.org/v2/everything?sources=the-verge&apiKey=76288293134a4616865d8e75b883b3dd`
  )
    .then((response) => response.json())
    .then((data) => {
      
        res.json({
          data :  data
        });
     
    });
});

module.exports = router;
