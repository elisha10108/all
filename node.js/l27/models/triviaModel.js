const mongoose = require("mongoose");
const Joi = require("joi");


const triviaSchema = new mongoose.Schema({
  question:String,
  answer1:String,
  answer2:String,
  answer3:String,
  answer4:String,
  dif:{
    type:Number, default:4
  },
  date_created:{
    type:Date, default:Date.now()
  }
})

// המודל מקבל פרמטר ראשון שם של הקולקשן במסד נתונים
// ופרמטר שני השם של המשתנה של הסכמה שיצרנו
exports.TriviaModel = mongoose.model("trivias",triviaSchema);

// בדיקה שהמידע מהצד לקוח מגיע בסדר נכון
// הולדיצזיה נועדה רק בשביל הוספה ועדכון
exports.validQuestion = (_quesitonBody) => {
  let joiSchema = Joi.object({
    question:Joi.string().min(3).max(200).required(),
    answer1:Joi.string().min(1).max(200).required(),
    answer2:Joi.string().min(1).max(200).required(),
    answer3:Joi.string().min(1).max(200).required(),
    answer4:Joi.string().min(1).max(200).required(),
    dif:Joi.number().min(1).max(10)
  })
  // אם יש טעות במידע שהגיע לפרמטר של הפונקציה שהגיע מהצד לקוח
  // אז יחזיר אובייקט שיש לו את המאפיין שנקרא אירור
  return joiSchema.validate(_quesitonBody);
}