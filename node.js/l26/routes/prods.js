const express = require('express');
const {ProdModel, validProd} = require("../models/prodModel")
const router = express.Router();

/* GET home page. */
router.get('/', async(req, res) => {
  // req.params
  // req.query
  try{
    let data = await ProdModel.find({});
    res.json(data);
  }
  catch(err){
    console.log(err);
    res.status(400).json({err:"there is problem, try again later"})
  }

});

// /search/?q=coat 
router.get("/search",async(req,res) => {
  let searchQ = req.query.q;
  try{
    // אם ננסה לחפש לפי הקוארי שקיבלנו ניהיה חייבים
    // לרשום בדיוק את מה שכתוב במסד נתונים
    // let data = await ProdModel.find({name:searchQ})

    // REGEXP -> מייצר ביטוי ריגולרי שבמקרה שלנו בודק אם 
    // המחרוזת שהנכנסו לתוך הסוגריים קיימת כחלק מהמחזורת של ה
    // NAME
    // i -> דואג שלא תיהיה בעיה של קייס סינסיטיב
    //  בשיעור 26 דקה 13:20 הסבר על איך זה עובד פחות או יותר
    let searchRegQ = new RegExp(searchQ, "i");
    console.log(searchRegQ);
    // חיפוש של השם לפי הביטוי
    // let data = await ProdModel.find({name:searchRegQ})
    // חיפוש בעמודה של השם או הקטגוריה את הביטוי
    let data = await ProdModel.find({$or:[{name:searchRegQ},{cat:searchRegQ}]})
    res.json(data); 
  }
  catch(err){
    console.log(err);
    res.status(400).json({err:"there is problem, try again later"})
  }
})


router.post("/add", async(req,res) => {
  // בדיקה שהמידע תקין מהצד לקוח
  let validate = validProd(req.body);
  // אם הוא מוצא טעות יהיה קיים בו מאפיין בשם אירור
  if(validate.error){
    return res.status(400).json(validate.error.details);
  }
  // req.body -> מידע שמגיע מפוסט שהוא מאובטח
  try{
    //insertMany -> הוספת רשומות למסד נתונים בקולקשין
    let data = await ProdModel.insertMany([req.body]);
    // המידע הגיע בהצלחה וגם הוסיף רשומה חדשה במערכת201 
    res.status(201).json(data)
  }
  catch(err){
    console.log(err);
    res.status(400).json({err:"there is problem, try again later"})
  }
})

// מחיקת רשומה
router.delete("/del/:idDel",async(req,res) => {
  let idDel = req.params.idDel;
  try{
    // מחפש את הרשומה שיש לה איי די לפי הפרמטר ומוחק אותה
  let data = await ProdModel.deleteOne({_id:idDel})
  // n:1 אם הרשומה נמחקה נקבל בתור תגובה
  res.json(data);
  }
  catch(err){
    console.log(err);
    res.status(400).json({err:"there is problem, try again later"})
  }
})

// עריכת רשומה
router.put("/edit/:idEdit", async(req,res) =>{
  let idEdit = req.params.idEdit;
  // בדיקה שהמידע תקין מהצד לקוח
  let validate = validProd(req.body);
  // אם הוא מוצא טעות יהיה קיים בו מאפיין בשם אירור
  if(validate.error){
    return res.status(400).json(validate.error.details);
  }
  try{
    // הפרמטר הראשון זה הסלקטור שאת מי לערוך, השני זה הערכים לעריכה
    let data = await ProdModel.updateOne({_id:idEdit},req.body);
    res.json(data);
  }
  catch(err){
    console.log(err);
    res.status(400).json({err:"there is problem, try again later"})
  }
})

module.exports = router;


// 10:50 להיות כאן