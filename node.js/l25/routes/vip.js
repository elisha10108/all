const express = require('express');
const {vip_ar} = require("../data/vipData")
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.json(vip_ar)
});


// /vip/search/?q=bill
router.get('/search', (req, res) => {
  let searchQ = req.query.q;
  let filter_ar = vip_ar.filter(item => {
    // toLowerCase -> בשביל קייס סינסיטיב
    // בודק אם המאפיין סורס קיים 
    if(item.source){
      return (item.name.toLowerCase().includes(searchQ.toLowerCase()) || item.source.toLowerCase().includes(searchQ.toLowerCase()))
    }
    // אם לא יעשה חיפוש רק בשם
    else{
      return (item.name.toLowerCase().includes(searchQ.toLowerCase()))
    }
  })
  res.json(filter_ar);
});

// /vip/country/Usa
router.get("/country/:countryName",(req,res) => {
  let country = req.params.countryName;
  let filter_ar = vip_ar.filter(item => {
    return (item.country.toLowerCase() == country.toLowerCase())
  })
  res.json(filter_ar)
})
module.exports = router;
