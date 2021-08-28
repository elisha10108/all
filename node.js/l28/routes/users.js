const express = require('express');
const bcrypt = require("bcrypt");
const {UserModel ,validUser } = require("../models/userModel");
const router = express.Router();

/* GET users listing. */
router.get('/', async(req, res) => {
  try{
  // let data = await UserModel.find({},{email:1,name:1})
  // הפרמטר השני בעצם פילטר איזה מאפיינים להציג
  //  0 -> רק לא להציג אותו
  // 1 -> רק להציג אותו
  let data = await UserModel.find({},{pass:0})
  res.json(data);
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post("/", async(req,res) => {
  let validBody = validUser(req.body);
  if (validBody.error) {
    return res.status(400).json(validBody.error.details);
  }
  try{
    let user = new UserModel(req.body);
    // אנחנו נרצה דבר ראשון להגדיר את רמת האבטחה
    let salt = await bcrypt.genSalt(10);
    // זה להגדיר שהסיסמא תיהיה מוצפנת לפי רמת האבטחה שקבענו
    user.pass = await bcrypt.hash(user.pass, salt);
    await user.save();
    // TODO: show to client just the email, _id, createedAt, name
    res.status(201).json(user)
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }

})

module.exports = router;
