var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("users", { title: "Users" });
});

router.post("/inscription", (req, res) => {
  if (req.body.username && req.body.password) {
    User.findOne({ username: req.body.username }).then((data) => {
      if (data) {
        res.json({
          message: "Le nom d'utilisateur est déja pris",
          result: false,
        });
      } else {
        const newUser = new User({
          username: req.body.username,
          password: req.body.password,
        });
        newUser.save();
        res.json({
          message: "Vous vous êtes bien inscrit",
          result: true,
          newUser: newUser,
        });
      }
    });
  } else {
    res.json({
      message: "Remplissez les champs vides",
    });
  }
});
router.post("/connexion", (req, res) => {
  if (req.body.username && req.body.password) {
    User.findOne({
      username: req.body.username,
      password: req.body.password,
    }).then((data) => {
      if (data) {
        const newUser = new User({
          username: req.body.username,
          password: req.body.password,
        });
        res.json({
          result: true,
          message: "Bienvenue",
          user: newUser,
        });
      } else {
        res.json({
          result: false,
          message: "Mot de passe incorrect",
        });
      }
    });
  } else {
    res.json({
      data: "vide",
      message: "Remplissez les champs",
    });
  }
});

module.exports = router;
