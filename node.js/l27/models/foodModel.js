const mongoose = require("mongoose");
const Joi = require("joi");

// יש מתכנתנים שאוהבים לעשות את 2 השורות למטה במקום שורה
// אחת
// const Schema = mongoose.Schema
// const foodSchema = new Schema()
const foodSchema = new mongoose.Schema({
  name:String,
  price:Number,
  cal:Number,
  img:{
    // default-> אם לא ישלח תמונה זה המידע שישמר בדוקמנט
    type:String,default:"https://monkeys.co.il/_images/monkeys.jpg"
  },
  dateCreated:{
    // Date.now() -> זמן יוניקס של עכשיו
    type:Date, default:Date.now()
  }
})
 

//13:10
exports.FoodModel = mongoose.model("foods",foodSchema)

//TODO joi validation
// אנחנו עושים ולדיזציה בצד שרת לפני ששולחים למסד נתונים
// כי המשאבים של המסד נתונים יקרים יותר 
// וחבל סתם להפעיל את המסד נתונים אם יש טעות
exports.validFood = (_foodBody) => {
  let schemaJoi = Joi.object({
    name:Joi.string().min(2).max(100).required(),
    price:Joi.number().min(1).required(),
    cal:Joi.number().min(1).required(),
    img:Joi.string().min(2).max(300)
  })
  // אם יהיה טעות במידע  בפרמטר שיגיע מהצד לקוח
  // יחזיר אובייקט שיש לו  מאפיין אירור
  return schemaJoi.validate(_foodBody);
}

