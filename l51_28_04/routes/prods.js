const express = require("express");
const { authToken, authAdminToken } = require("../middlewares/auth");
const { ProdModel, validProd, generateShortId } = require("../models/prodModel");

const router = express.Router();

router.get("/", async(req,res) => {
  let perPage = (req.query.perPage)? Number(req.query.perPage) : 4;
  let page = (req.query.page) ? Number(req.query.page) : 0;
  let sortQ = (req.query.sort) ? req.query.sort : "_id";
  let ifReverse = (req.query.reverse == "yes") ? -1 : 1 ;
  let filterCat = (req.query.cat) ? {category_s_id:req.query.cat} : {};

  try {
    let data = await ProdModel.find(filterCat)
    .sort({[sortQ]:ifReverse})
    .limit(perPage)
    .skip(page * perPage)
    res.json(data);
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
})

router.get("/count" , async(req,res) => {
  let filterCat = (req.query.cat) ? {category_s_id:req.query.cat} : {};
  try {
    let data = await ProdModel.countDocuments(filterCat)
    res.json({count:data});
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
})

// get one product by it id
router.get("/single/:id", async(req,res) => {
  try{
    let data = await ProdModel.findOne({_id:req.params.id});
    res.json(data);
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
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