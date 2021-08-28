const express = require('express');
const {DeviceModel} = require("../models/deviceModel");
const router = express.Router();

/* GET home page. */
router.get('/', async(req, res) => {
  // find({}) -> לחפש את הכל 
  try{
    let data = await DeviceModel.find({})
    res.json(data)
  }
  catch(err){
    res.status(400).json({err:"there is problem, try again later"})
  }
});


router.get("/company/:idCompany",async(req,res) => {
  try{
    let idCompany = req.params.idCompany;
    let data = await DeviceModel.find({company_id:idCompany});
    res.json(data);
  }
  catch(err){
    console.log(err);
    res.status(400).json({err:"there is problem, try again later"})
  }

})

module.exports = router;