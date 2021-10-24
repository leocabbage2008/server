var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.send(
    "Fortnite, LOL, TF2, L4D2, Valorant, Minecraft, Soul Knight, Alto's odyssey, Geometry Dash, Getting over it with Benneft Foddy"
  );
});

router.get('/rpg', function (req, res, next) {
  res.send('WOW, WOW, WOT');
});

module.exports = router;
