const mongoose = require("mongoose");
const Joi = require("joi");

const prodSchema = new mongoose.Schema({
  cat:String,
  name:String,
  price:Number,
  image:String
})

exports.ProdModel = mongoose.model("prods",prodSchema);


// בודק שהמידע שמגיע מצד הלקוח
// בריק באדי תקין לפני שהוא מגיש
// את המידע למונגו
// צד שרת המשאבים שלו זולים יותר ממונגו
// ולכן לא נרצה להפעיל את המונגו כאשר יש שגיאה
const validProd = (_prodBody) => {
  let schema = Joi.object({
    cat:Joi.string().min(2).max(100).required(),
    name:Joi.string().min(2).max(100).required(),
    price:Joi.number().min(1).required(),
    image:Joi.string().min(2).max(200).required()
  })
// מיטודה שמחזירה אם המידע תקין לסכמה 
// שכתבנו לג'וי
  return schema.validate(_prodBody);
}


exports.validProd = validProd;