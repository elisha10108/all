const express = require('express');
const {auth} = require("../middleware/auth")
const {YadModel,validYadProduct} = require("../models/yadModel")


const router = express.Router();

/* GET home page. */
router.get('/', async(req, res) => {
  let perPage = (req.query.perPage)? Number(req.query.perPage) : 10;
  let page = req.query.page;
  let sortQ = req.query.sort;
  let ifReverse = (req.query.reverse == "yes") ? -1 : 1 ;
  try {
    // sort -> לפי איזה מאפיין נרצה למיין את התוצאות
    // 1-> מהקטן לגדול ASCENDING
    // -1 -> מהגדול לקטן DESCINGING
    let data = await YadModel.find({})
    .sort({[sortQ]:ifReverse})
    .limit(perPage)
    .skip(page * perPage)
    res.json(data);
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
  res.json({msg:"yads work"});
});

router.post("/" , auth , async(req,res) => {
  let validBody = validYadProduct(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try{
    let product = new YadModel(req.body);
    // מכניס את היוזר איי די מהטוקן שפוענח
    product.user_id = req.decodeToken._id;
    await product.save();
    res.status(201).json(product);
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
})


router.delete("/:idDel", auth, async(req,res) => {
  let idDel = req.params.idDel;
  try{
    // בשאילתא של המחיקה אנחנו נמחוק את הרשומה
    // שהאיי די שלה שווה לפרמטר שהועבר מהצד לקוח אבל בנוסף
    // נבדוק גם לפי הטוקן שבאמת המוצר ברשומה קשור למשתמש
    let dataDel = await YadModel.deleteOne({_id:idDel,user_id:req.decodeToken._id});
    res.json(dataDel);
  }
  catch(err){
    console.log(err);
    res.status(400).json(err);
  }
})

router.put("/:idEdit" , auth, async(req,res) => {
  let idEdit = req.params.idEdit;
  let validBody = validYadProduct(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try{
    // כמו במחיקה גם בעריכה בפילטר
    // אנחנו בשאילתא פונים לאיי די של הרשומה
    // אך היוזר איי די שלה חייב להיות כמו האיידי שפוענח בטוקן
    let dataEdit = await YadModel.updateOne({_id:idEdit,user_id:req.decodeToken._id},req.body);
    res.json(dataEdit);
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
})

// 13:10

module.exports = router;
