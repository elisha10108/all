const express = require('express');
const axios = require('axios');
const router = express.Router();

/* GET home page. */
router.get('/', async(req, res) => {
  let myUrl = "https://deezerdevs-deezer.p.rapidapi.com/search?rapidapi-key=0553c29e4bmsh3a239d5a07dbdb4p1e9ae1jsnc9399dacde13&q=abba"
  // axios(url)
  // .then(resp => {
  //   res.json(resp.data.data)
  // })
  let resp = await axios(myUrl)
 res.json(resp.data.data)
});

// music/search/?q=queen
router.get('/search', async(req, res) => {
  let searchQ = req.query.q;
  let myUrl = "https://deezerdevs-deezer.p.rapidapi.com/search?rapidapi-key=0553c29e4bmsh3a239d5a07dbdb4p1e9ae1jsnc9399dacde13&q="+searchQ;
  // axios(url)
  // .then(resp => {
  //   res.json(resp.data.data)
  // })
  let resp = await axios(myUrl)
 res.json(resp.data.data)
});

// 13:05


module.exports = router;
