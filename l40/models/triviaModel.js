const mongoose = require("mongoose");
const Joi = require("joi");

let triviaSchema = new mongoose.Schema({
  q:String,
  a1:String,
  a2:String,
  a3:String,
  a4:String,
  difficult:Number,
  img:String,
  category:{
    type:String, default:"general"
  },
  user_id:String,
  date_created:{
    type:Date, default:Date.now()
  }
})

exports.TriviaModel = mongoose.model("trivias",triviaSchema); 

exports.triviaValid = (_bodyData) => {
  let schemaJoi = Joi.object({
    q:Joi.string().min(2).max(200).required(),
    a1:Joi.string().min(1).max(200).required(),
    a2:Joi.string().min(1).max(200).required(),
    a3:Joi.string().min(1).max(200).required(),
    a4:Joi.string().min(1).max(200).required(),
    difficult:Joi.number().min(1).max(10).required(),
    category:Joi.string().min(2).max(50),
    // allow(null, '') מאפשר למאפיין להיות ריק שהוא נשלח
    img:Joi.string().max(200).allow(null, ''),
  })
  return schemaJoi.validate(_bodyData);
}