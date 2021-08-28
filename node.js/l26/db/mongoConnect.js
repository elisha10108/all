const mongoose = require('mongoose');
// panda3 -> מיצג את השם של המסד נתונים
mongoose.connect('mongodb://localhost:27017/panda3', {useNewUrlParser: true, useUnifiedTopology: true});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("mongo connect")
  // we're connected!
});

module.exports = db;