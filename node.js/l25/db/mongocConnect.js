// התחברות ראשונית למונגו ככה שהשרת יהיה מוכן מול
// המסד הנתונים

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/panda2', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("mongo connect")
  // we're connected!
});

module.exports = db;