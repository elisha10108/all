const express = require("express");
const { authToken, authAdminToken } = require("../middlewares/auth");
const {TriviaModel, triviaValid} = require("../models/triviaModel")

const router = express.Router();

router.get("/", async(req,res) => {
  let perPage = (req.query.perPage)? Number(req.query.perPage) : 10;
  let page = req.query.page;
  let sortQ = req.query.sort;
  let ifReverse = (req.query.reverse == "yes") ? -1 : 1 ;
  try {
    let data = await TriviaModel.find({})
    .sort({[sortQ]:ifReverse})
    .limit(perPage)
    .skip(page * perPage)
    res.json(data);
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
  // res.json({msg:"trivia work"});
})

//authAdminToken -> בודק גם שהמשתמש הוא אדמין
router.post("/" , authToken, authAdminToken , async(req,res) => {
  let validBody = triviaValid(req.body);
  if(validBody.error){
    return res.status(400).json(validBody.error.details);
  }
  try{
    let triviaQ = new TriviaModel(req.body);
    // TODO: get user_id from token
    triviaQ.user_id = req.userData._id;
    await triviaQ.save();
    res.status(201).json(triviaQ)
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  } 
})

router.put("/:editId" , authToken, authAdminToken ,  async(req,res) => {
  let editId = req.params.editId;
  let validBody = triviaValid(req.body);
  if(validBody.error){
    return res.status(400).json(validBody.error.details);
  }
  try{
    //TODO: בדיקת אבטחה
    let question = await TriviaModel.updateOne({_id:editId},req.body);
    res.json(question);
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  } 

})

router.delete("/:delId" , authToken, authAdminToken , async(req,res) => {
  let delId = req.params.delId;
  try{
    let delQuestion = await TriviaModel.deleteOne({_id:delId});
    res.json(delQuestion)
  }
  catch (err) {
    console.log(err);
    res.status(400).json(err);
  } 
})


module.exports = router;