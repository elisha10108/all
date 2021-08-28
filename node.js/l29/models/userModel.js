const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");

let userSchema = new mongoose.Schema({
  email:String,
  pass:String,
  name:String,
  role:{
    type:String,default:"regular"
  },
  date_created:{
    type:Date, default:Date.now()
  }
})

exports.UserModel = mongoose.model("users",userSchema);

// פונקציה שמייצרת טוקן שמכיל את האיידי של היוזר שהתחבר 
// והמידע עצמו יהיה מוצפן
exports.genToken = (_id,_email) => {
  // monkeysSecret -> המילה המוצפנת שמצפינה את הטוקן
  // אסור שהמילה /ביטוי הנל יהיה חשוף להאקר
  let token = jwt.sign({_id:_id,email:_email},"monkeysSecret",{expiresIn:"60mins"})
  return token;
  
}

exports.validUser = (_bodyUser) => {
  // סכמה של הצד השרת ובעצם תתבצע בדיקה בצד שרת
  // שהמידע תקין לפני שנבצע עליו שאילתא במסד נתונים
  let joiSchema = Joi.object({
    email:Joi.string().min(2).max(100).email().required(),
    pass:Joi.string().min(2).max(100).required(),
    name:Joi.string().min(2).max(100).required()
  })
// אם יש טעות יחזיר מאפיין שיש בו אירור
  return joiSchema.validate(_bodyUser);
}

// וולדיזציה לכניסה 
exports.validLogin = (_bodyLogin) =>{
  let joiSchema = Joi.object({
    email:Joi.string().min(2).max(100).email().required(),
    pass:Joi.string().min(2).max(100).required()
  })
// אם יש טעות יחזיר מאפיין שיש בו אירור
  return joiSchema.validate(_bodyLogin);
}

// 15:01 
