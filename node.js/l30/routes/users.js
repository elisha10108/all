const express = require('express');
const bcrypt = require("bcrypt");
const _ = require("lodash");

const { UserModel, validUser, validLogIn, genToken } = require("../models/userModel");
const { auth } = require("../middleware/auth")
const router = express.Router();

/* GET users listing. */
router.get('/', async (req, res) => {
  try {
    // let data = await UserModel.find({},{email:1,name:1})
    // הפרמטר השני בעצם פילטר איזה מאפיינים להציג
    //  0 -> רק לא להציג אותו
    // 1 -> רק להציג אותו
    let data = await UserModel.find({}, { pass: 0 })
    res.json(data);
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});



router.post("/login", async (req, res) => {
  let validBody = validLogIn(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try {
    // בודק אם האימייל בכלל קיין במסד 
    let user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: "USer not found" });
    }
    // בדוק אם הסיסמא שנשלחה מהקליינט מתאימה
    // להצפנה במסד של אותו יוזר שנמצא הרשומה שלו
    let validPass = await bcrypt.compare(req.body.pass, user.pass);
    if (!validPass) {
      return res.status(400).json({ message: "Pass not good" });
    }
    // מייצר טוקן שמכיל בתוכו את האיי די של המשתמש
    let userToken = genToken(user._id);
    // מחזיר טוקן שלאחר מכן ישמש בשליחה בהידר במקומות
    // שחייבים להיות משתמש רשום 
    res.json({ token: userToken });
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
})

router.post("/", async (req, res) => {
  let validBody = validUser(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try {
    let user = new UserModel(req.body);
    // אנחנו נרצה דבר ראשון להגדיר את רמת האבטחה
    let salt = await bcrypt.genSalt(10);
    // זה להגדיר שהסיסמא תיהיה מוצפנת לפי רמת האבטחה שקבענו
    user.pass = await bcrypt.hash(user.pass, salt);
    await user.save();
    // TODO: show to client just the email, _id, createedAt, name
    res.status(201).json(_.pick(user, ["_id", "date_created", "name", "email"]));
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }

})

module.exports = router;
function newFunction() {
  router.get("/userInfo", auth, async (req, res) => {
    // res.json({message:"all good after auth middleware"})
    let userData = await UserModel.findOne({ _id: req.decodeToken._id }, { pass: 0 });
    res.json(userData);
  });
}

