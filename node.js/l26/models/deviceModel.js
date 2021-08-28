const mongoose = require("mongoose");


const deviceSchema = new mongoose.Schema({
  name:String,
  company_id:String,
  battery_score:Number,
  camera_score:Number,
  price:Number
})


exports.DeviceModel = mongoose.model("devices",deviceSchema);
