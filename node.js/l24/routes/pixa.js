const express = require("express");
const {pixa_ar} = require("../data/pixaData"); 

const router = express.Router();

router.get("/", (req,res) => {
  res.render("pixa",{title:"pixa page" , ar:pixa_ar});
})

// like export default
module.exports = router;