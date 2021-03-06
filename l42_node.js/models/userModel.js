const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const {config} = require("../config/secretData")

let userSchema = new mongoose.Schema({
  email:String,
  pass:String,
  name:String,
  role:{
    type:String,default:"regular"
  },
  date_created:{
    type:Date, default:Date.now()
  },
  question_ar:Array,
  score:{
    type:Number , default:0
  }
})
// 10:50 
exports.UserModel = mongoose.model("users",userSchema);

exports.genToken = (_id) => {
  let token = jwt.sign({_id},config.jwtSecret,{expiresIn:"60mins"});
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


exports.validLogin = (_bodyUser) => {
// בדיקה בצד שרת בשביל הלוג אין שיש אימייל ופאס
// בPAYLOAD מהצד לקוח
  let joiSchema = Joi.object({
    email:Joi.string().min(2).max(100).email().required(),
    pass:Joi.string().min(2).max(100).required()
  })
// אם יש טעות יחזיר מאפיין שיש בו אירור
  return joiSchema.validate(_bodyUser);
}

exports.validScore = (_bodyUser)=> {

    let joiSchema = Joi.object({
      score:Joi.number().min(-900).max(9999).required()
    })
    return joiSchema.validate(_bodyUser);
  }

exports.validIdQuestion = (_bodyUser)=> {
  let joiSchema = Joi.object({
    _id:Joi.string().min(2).max(200).required()
  })
  return joiSchema.validate(_bodyUser);
}