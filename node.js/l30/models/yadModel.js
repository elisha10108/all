const mongoose = require("mongoose");
const Joi = require("joi");

let yadSchema = new mongoose.Schema({
  name:String,
  info:String,
  category:String,
  img_url:String,
  price:Number,
  user_id:String,
  date_created:{
    type:Date , default:Date.now()
  }
})

exports.YadModel = mongoose.model("yads",yadSchema);

exports.validYadProduct = (_bodyPayload) => {
  let joiSchema = Joi.object({
    name:Joi.string().min(2).max(100).required(),
    info:Joi.string().min(2).max(500).required(),
    category:Joi.string().min(2).max(100).required(),
    img_url:Joi.string().min(2).max(200),
    price:Joi.number().min(1).max(9999999).required()
  })

  return joiSchema.validate(_bodyPayload);
}