const express = require('express');
const {vip_ar} = require("../data/vipData"); 

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('vip', { title: 'Vip list' , ar:vip_ar });
});

// :id -> מייצג שאחרי הסינגל מגיע פרמטר דינמי שניתן לאסוף
router.get("/single/:id", (req, res) => {
  let index = req.params.id;
  let item = vip_ar[index]
  if(!item){
    return res.status(404).render('page404', { title: 'error 404 page not found'});
  }
  let dt = new Date();
  item.age = dt.getFullYear()-item.birth_year;
  // res.render('vip_single', { title: 'Vip list', id:id , item:item });
  res.render('vip_single', { title: 'Vip list' , item });
});



module.exports = router;
