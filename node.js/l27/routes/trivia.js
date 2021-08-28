const express = require('express');
const {TriviaModel , validQuestion} = require("../models/triviaModel")
const router = express.Router();


/* GET home page. */
router.get('/', async(req, res) => {
  let data = await TriviaModel.find({});
  res.json(data);
  // תמיד בהתחלה לבדיקה נכתוב הודעה שהרואט עובד
  // res.json({message:"trivia route work"})
});

// trivia/search/?q=
// יחפש גם בשאלה וגם בתשובות את הצירוף שחיפשתי
router.get("/search",async(req,res) => {
  let qString = req.query.q;
  // הריג אקספ מאפשר לחפש רק ביטוי מסויים ולא לכתוב בדיוק
  // את הביטוי אחד לאחד מתוך השאלה
  let qReg = new RegExp(qString,"i")
  // let data = await TriviaModel.find({question:qReg})
  let data = await TriviaModel.find({$or:[{question:qReg},{answer1:qReg},{answer2:qReg},{answer3:qReg},{answer4:qReg}]})
  res.json(data);
})

// הוספה
router.post("/add" , async(req,res) => {
  // מידע בפוסט נמצא req.body
  // בודק שהריק באדי שהגיע מהצד לקוח
  // מתאים לסכמה שהגדרנו בג'וי בקובץ של המודל
  let validBody = validQuestion(req.body)
  // אם הסכמה לא מתאימה יווצר מאפיין אירור
  if(validBody.error){
    // ונחזיר לצד לקוח את האירור שקיים ומה לא בסדר
    return res.status(400).json(validBody.error.details);
  }
  try{
    let data = await TriviaModel.insertMany([req.body]);
    res.status(201).json(data);
  }
  catch(err){
    console.log(err);
    res.status(400).json(err)
  }
})

// 14:52

module.exports = router;