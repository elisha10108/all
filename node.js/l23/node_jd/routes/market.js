const express = require('express');
const router = express.Router();
const {market_arr} = require("../data/marketData")

/* GET home page. */
router.get('/', (req, res) => {
  res.render('market', { ar:market_arr });
});

module.exports = router;