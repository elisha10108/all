const jwt = require("jsonwebtoken");
exports.auth = (req,res,next) => {
  let token = req.header("auth-token");
  if(!token) {
    return res.status(400).json({message:"you must send token to this endpoint to get info of user 44444"});
  }
  try{
    let decodeToken = jwt.verify(token,"monkeysSecret");

    req.decodeToken = decodeToken;
    next();
  } 
  catch (err) {
    console.log(err);
    res.status(400).json({message:"token invalid or expired"});
  }
}