const express = require("express");
const { authToken } = require("../middlewares/auth");
const { validCart, CartModel } = require("../models/cartModel");

const router = express.Router();

router.get("/", (req,res) => {
  res.json({msg:"carts work"});
})

router.post("/", authToken, async(req,res) => {
  let validBody = validCart(req.body);
  if(validBody.error){
    return res.status(400).json(validBody.error.details);
  }
  try{
    // בודקים אם יש רשומה במצב פנדינג עם איי די 
    // של המשתמש אם אין נייצר חדש אם קיים נעדכן
    let cartData = await CartModel.findOne({user_id: req.userData._id , status:"pending"});
    // נמצא ולכן יעודכן
    if(cartData){
      let data = await CartModel.updateOne({_id:cartData._id},req.body);
      return res.json(data);
    }
    // לא נמצא ולכן נייצר רשומה חדשה
    let newData = new CartModel(req.body);
    newData.user_id = req.userData._id;
    await newData.save();
    return res.status(201).json(newData);
  }
  catch(err){
    console.log(err);
    res.status(400).send(err)
  } 
})

module.exports = router;