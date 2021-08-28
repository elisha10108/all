const express = require("express");
const { authToken, authAdminToken } = require("../middlewares/auth");
const { ProdModel, validProd, generateShortId } = require("../models/prodModel");

const router = express.Router();

router.get("/", (req,res) => {
  res.json({msg:"prods work"});
})

// route for add new product
router.post("/", authToken,authAdminToken, async(req,res) => {
  let validBody = validProd(req.body);
  if(validBody.error){
    return res.status(400).json(validBody.error.details);
  }
  try{
    let prod = new ProdModel(req.body);
    prod.user_id = req.userData._id;
    prod.s_id = await generateShortId()
   // console.log(prod.s_id);
    await prod.save();
    res.status(201).json(prod);
  } 
  catch(err){
    console.log(err);
    res.status(400).send(err)
  } 
})

router.put("/:editId", authToken,authAdminToken, async(req,res) => {
  let editId = req.params.editId;
  let validBody = validProd(req.body);
  if(validBody.error){
    return res.status(400).json(validBody.error.details);
  }
  try{
    // מכיוון שכל אדמין יכול לערוך , אז נרצה לעדכן את האיי די
    // של היוזר האדמין האחרון שנגע במוצר
    req.body.user_id = req.userData._id;
    let data = await ProdModel.updateOne({_id:editId},req.body)
    res.status(201).json(data);
  } 
  catch(err){
    console.log(err);
    res.status(400).send(err)
  } 
})

router.delete("/:idDel", authToken , authAdminToken, async(req,res) => {
  let idDel = req.params.idDel;
  try{
    let data = await ProdModel.deleteOne({_id:idDel});
    res.json(data);
  }
  catch(err){
    console.log(err);
    res.status(400).send(err)
  } 
})
//TODO: PUT EDIT
// TODO: just admin can add, delete and edit prod
// 14:50
module.exports = router;