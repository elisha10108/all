const express = require('express');
const {market_ar} = require("../data/marketData")
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  // res.send("market work")
  res.json(market_ar);
});

router.get("/category/:catName", (req,res) => {
  let catName = req.params.catName;
  let temp_ar = market_ar.filter(item => (item.cat == catName))
  res.json(temp_ar);
})


module.exports = router;
