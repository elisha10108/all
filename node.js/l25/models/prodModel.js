const mongoose = require("mongoose");
const Joi = require("joi");

// ההגדרה היא כדי שנוכל לתקר עם הקולקשן
// הסכמה קשורה בשביל ההוספה של רשומה או עריכה

// מייצרים סכמה כדי שיהיה מובן איך הטבלה/קולקשן בנוי
//ולא כל מתכנת יעשה מה שבא בשמות של מאפיינים 
const prodSchema = new mongoose.Schema({
  cat:String,
  name:String,
  price:Number,
  image:String
  // בהמשך נוסיף גם תאריך יצירה
})
// מייצרים את המודל שמורכב משם
// הקולקשן והסכמה שהוא בנוי ממנה בנוד גיי אס
const ProdModel = mongoose.model("prods",prodSchema);

// כמו אקספורט רגיל
exports.ProdModel = ProdModel;


// יהיה בשיעור הבא
// לייצר פונקציה שמקבלת כפרמטר את המידע מהצד לקוח
// ואם יהיה טעות היא תחזיר מאפיין אירור
const validProd = (_prod) => {
  let schemaJoi = Joi.object({
    cat:Joi.string().min(2).max(100).required(),
    name:Joi.string().min(2).max(100).required(),
    price:Joi.number().min(1).required(),
    image:Joi.string().min(2).max(200)
  })
// בודק אם הפרמטר שהוא אובייקט יש לו את המאפיינים בסכמה
// של הג'וי
// ואנחנו עושים כאן בדיקה בצד שרת לפני שמשגרים מידע
// למסד נתונים
  return schemaJoi.validate(_prod);
}
exports.validProd = validProd;

// 14:50 