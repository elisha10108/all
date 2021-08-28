const express = require('express');
const axios = require("axios");
const router = express.Router();


const testSomething = async() => {
  let myurl = "https://rawg.io/api/games?page_size=20&search=red%20alert"
 // אין פיטץ' בנוד גיי אס
 // עובד כמו פיטץ
  let data = await axios(myurl)
  console.log(data);
  
}

//testSomething();



/* GET home page. */
router.get('/', async(req, res) => {
  let myurl = "https://rawg.io/api/games?page_size=20&search=red%20alert"
  let resp = await axios(myurl);
  // let data = await resp.json()
  res.render('games', { title: 'games api from outside',
               ar: resp.data.results });
});

module.exports = router;
