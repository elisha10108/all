const express = require("express");
const {vip_ar} = require("../data/vipData");

const router = express.Router();

router.get("/", (req,res) => {
  // res.send("hello from VIP");
  res.render("vip",{title:"List of vip",ar:vip_ar});
})
// המשימה נמצא בתקיית DATA
module.exports = router;