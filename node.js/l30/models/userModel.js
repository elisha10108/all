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

// gen -> generate -> מחולל
exports.genToken = (_id) => {
  // let token = jwt.sign({_id}) 
  // הטוקן מכיל בקידוד את האיי די של היוזר שביצע לוגאין
  let token = jwt.sign({_id:_id},"monkeysSecret",{expiresIn:"60mins"}) ;
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


exports.validLogIn = (_bodyUser) => {
  let joiSchema = Joi.object({
    email:Joi.string().min(2).max(100).email().required(),
    pass:Joi.string().min(2).max(100).required()
  })
// אם יש טעות יחזיר מאפיין שיש בו אירור
  return joiSchema.validate(_bodyUser);
}

// 15:01 
