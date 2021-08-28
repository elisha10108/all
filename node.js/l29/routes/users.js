const express = require('express');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const _ = require("lodash");
const {UserModel,validUser, validLogin, genToken} = require("../models/userModel")
const router = express.Router();

/* GET users listing. */
router.get('/', async(req, res) => {
  let perPage = (req.query.perPage)? Number(req.query.perPage) : 10;
  let page = req.query.page;
  let sortQ = req.query.sort;
  let ifReverse = (req.query.reverse == "yes") ? -1 : 1 ;
  try{
    let data = await UserModel.find({},{pass:0})
    .sort({[sortQ]:ifReverse})
    .limit(perPage)
    .skip(page * perPage)
    res.json(data);
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
 
});

// בדיקה לאיך נבדוק שהטוקן תקין ונציג לאותו יוזר על פי האיי די שנאסוף
// מהטוקן את המידע שיש במסד נתונים ברשומה שלו
// router.get("/testToken", async(req,res) => {
router.get("/myinfo", async(req,res) => {
  // req.params , req.query , req.body
  // req.header -> שיטה נוספת לשליחת מידע שטוב לטוקנים
  let token = req.header("auth-token");
  // בודק שבכלל נשלח טוקן
  if(!token){
   return res.status(400).json({msg:"you must send token to show the request in this endpoint url"});
  }
  try{
    // מקודד את ההצפנה של הטוקן
    let tokendecode = jwt.verify(token,"monkeysSecret");
    // מוצא את הרשומה לפי האיי די שקודד בטוקן
    let data = await UserModel.findOne({_id:tokendecode._id},{pass:0});
    res.json(data);
  }
  catch(err){
    // יגיע לכאן אם הטוקן לא תקין או פג תוקף
    // אם הטוקן לא תקין זה רק האקר בן בליעל יכול להיות
    res.status(400).json({msg:"token invalid or expired"});
  }
})

// 14:45 להיות כאן

router.post("/login" , async(req,res) => {
  let validBody = validLogin(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try{
    let user = await UserModel.findOne({email:req.body.email})
    // בודק אם לא קיים משתמש עם האימייל שנשלח מהבאדי
    if(!user){
      return res.status(400).json({msg:"user not found"});
    }
       // נבדוק שהסיסמא המוצפנת מהמסד נתונים מתאימה
    // לסיסמא שהגיעה מהבאדי מהקליינט
    let validPass = await bcrypt.compare(req.body.pass,user.pass) 
    if(!validPass){
      return res.status(400).json({msg:"password not good"});
    }
    // מייצרים טוקן שמכיל בתוכו את האיי די של היוזר
    // שביצע לוגאין וגם האימייל
    let myToken = genToken(user._id,user.email);
    res.json({token:myToken});
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
})
//return 13:11;

router.post("/",async(req,res) => {
  let validBody = validUser(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try{
    let user = new UserModel(req.body);
    // מגדיר את רמת ההצפנה
    let salt = await bcrypt.genSalt(10);
    // מצפין את מאפיין הסיסמא
    user.pass = await bcrypt.hash(user.pass, salt);
    await user.save();
    //TODO -> not show the password to client
    res.status(201).json(
      // דואג לא להציג את הסיסמא ובעצם אנחנו בוחרים
      // את המאפיינים שנרצה להציג לצד לקוח
      _.pick(user,["_id","email","name","date_created"])
      );
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
})

module.exports = router;
