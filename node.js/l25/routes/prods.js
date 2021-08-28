const express = require('express');
const { ProdModel } = require("../models/prodModel");

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  ProdModel.find({})
    .then(data => {
      res.json(data);
    })
});

router.get("/category/:catName",async(req,res) => {
  let catName = req.params.catName;
  let dataDb = await ProdModel.find({cat:catName})
  res.json(dataDb);
})

// יהיה בשיעור הבא
router.post("/add",(req,res) => {

  // req.body -> מידע שמגיע מצד לקוח בבקשת פוסט,פוט,דיליט
  res.json(req.body);
})
module.exports = router;
