const express = require('express');
const bcrypt = require("bcrypt");
const _ = require("lodash");
const {UserModel ,validUser , validLogin, genToken, validScore, validIdQuestion} = require("../models/userModel");
const { authToken, authAdminToken } = require('../middlewares/auth');
const router = express.Router();

/* GET users listing. */
router.get('/', async(req, res) => {
  res.json({msg:"user route"})
});




router.get("/myInfo",authToken ,async(req,res) => {
  try{
    // req.userData -> נוצר בקובץ מידלווארי אוט
    let user = await UserModel.findOne({_id:req.userData._id},{pass:0});
    res.json(user);
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
})

// הצד לקוח משתמש בראוט הזה לבדיקה אם להעיף או להשאיר את היוזר
router.post("/checkAdmin",authToken,authAdminToken,async(req,res) => {
  res.json({auth:"success"})
})




router.post("/login",async(req,res) => {
  let validBody = validLogin(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try{
    // קודם בודק שבכלל קיים יוזר עם האימייל הנל
    let user = await UserModel.findOne({email:req.body.email});
    if(!user){
      return res.status(400).json({msg:"user or password invalid 1"});
    }
    let validPass = await bcrypt.compare(req.body.pass,user.pass);
    if(!validPass){
      return res.status(400).json({msg:"user or password invalid 2"});  
    }
    let myToken = genToken(user._id);
    //TODO just admin get token
    res.json({token:myToken});
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
})


// Sign up new user
router.post("/", async(req,res) => {
  let validBody = validUser(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try{
    let user = new UserModel(req.body);
    // אנחנו נרצה דבר ראשון להגדיר את רמת האבטחה
    let salt = await bcrypt.genSalt(10);
    // זה להגדיר שהסיסמא תיהיה מוצפנת לפי רמת האבטחה שקבענו
    user.pass = await bcrypt.hash(user.pass, salt);
    await user.save();
    // TODO: show to client just the email, _id, createedAt, name
    res.status(201).json(_.pick(user,["_id","email","date_created","name"]))
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }

})

//for trivia game

router.put("/addScore", authToken , async(req,res) => {
  let validBody = validScore(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  // לשלוף כרגע כמה ניקוד יש למשתמש
  try{
    let user = await UserModel.findOne({_id:req.userData._id});
    // ואז להוסיף את הניקוד לפי המידע מהבאדי 
    let newScore = Number(user.score) + Number(req.body.score);
    // לעדכן במסד למשתמש
                                            // who to update       what to update
    let data = await UserModel.updateOne({_id:req.userData._id},{score:newScore});
    // כדי שהצד לקוח ידע מה הניקוד החדש המעודכן נוסיף את הניקוד כמאפין לדאטא
    data.newScore = newScore;
    res.json(data);
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
})

// מעדכן את מערך השאלות שהמשתמש ענה עליהם נכון
router.put("/updateQuestions" , authToken , async(req,res) => {
  let validBody = validIdQuestion(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }

  try{
    let user = await UserModel.findOne({_id:req.userData._id});
    let temp_ar = user.question_ar;
    //מוסיף את האיידי של שאלה שהמשתמש ענה עליה כבר
    temp_ar.push(req.body._id);
//TODO: לבדוק שלא נכניס שלה שכבר נכנסה למערך כדי למנוע בעיות והתקפת האקרים
    let data = await UserModel.updateOne({_id:req.userData._id},{question_ar:temp_ar});
    res.json(data);


  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
})

module.exports = router;
