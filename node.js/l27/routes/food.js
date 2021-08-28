const express = require('express');
const {FoodModel, validFood} = require("../models/foodModel");
const router = express.Router();

/* GET home page. */
router.get('/', async(req, res) => {
  let data = await FoodModel.find({})
  res.json(data);
});

// create / insert
router.post("/add",async(req,res) => {
  let validBody = validFood(req.body);
  if(validBody.error){
    return res.status(400).json(validBody.error.details);
  }

  try{
    let dataInsert = await FoodModel.insertMany([req.body]);
    res.status(201).json(dataInsert);
  }
  catch(err){
    console.log(err);
    res.status(400).json(err)
  }
})

// edit/ update

router.put("/edit/:idEdit", async(req,res) => {
  let idEdit = req.params.idEdit;
  let validBody = validFood(req.body);
  if(validBody.error){
    return res.status(400).json(validBody.error.details);
  }

  try{
    // פרמטר ראשון איזה רשומה לערוך , והשני המידע שצריך לערוך
    let dataEdit = await FoodModel.updateOne({_id:idEdit},req.body);
    res.json(dataEdit);
  }
  catch(err){
    console.log(err);
    res.status(400).json(err)
  }
})

// delete
router.delete("/delete/:idDel",async(req,res) => {
  let idDel = req.params.idDel;
  try{
    let delData = await FoodModel.deleteOne({_id:idDel});
    res.json(delData);
  }
  catch(err){
    console.log(err);
    res.status(400).json(err)
  }
})

// 10:55 

module.exports = router;