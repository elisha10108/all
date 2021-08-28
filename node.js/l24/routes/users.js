const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.send('respond with a resource 3333');
});

// אוסף קווארי סטרינג
router.get("/info",(req,res) => {
  res.render("users_query",{title:"info",query:req.query});
})

module.exports = router;
