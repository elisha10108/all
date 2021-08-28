// מודול שיודע להציג בדפדפן אם יש שגיאה  בשרת שהיא לא פטאלית במקום בקונסול
const createError = require('http-errors');
// הפאקג' עצמו של אקפסרס שיודע לבצע פעולות שחוסכות לנו המון זמן בהפעלת שרת
const express = require('express');
// יודע לקרוא תיקיות ולהתעסק עם המיקום של הקבצים ושל יו אל אלים
const path = require('path');
// קוקיס דומה ללוקאל סטורג' בצד לקוח
const cookieParser = require('cookie-parser');
// יודע להציג דיבאגינג יותר מתקדם אם לא עובדים מול ויזואל סטודיו
const logger = require('morgan');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const vipR = require("./routes/vip");
const marketR = require("./routes/market");

const app = express();

// view engine setup
// מגדיר את תקיית ויוז כתקייה שמציגה 
// ומרנדרת את הקבצים ויו שהרואטרים קרואים להם
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
// דואג שאם מפעילים את השרת מהסי אמ די יהיה יותר
// פירוט בדיבאגינג כיום פחות בשימוש קשור למודול מורגן
app.use(logger('dev'));
// מגדיר שכל מידע שמגיע לאקספרס ויוצא ממנו יהיה בפורמט ג'ייסון
app.use(express.json());
// דואג שבראוט יהיה ניתן לקרוא כל שפות כולל עברית urlencoded
app.use(express.urlencoded({ extended: false }));
// דואג שיהיה ניתן לבצע פקודות של קוקיס 
app.use(cookieParser());
// מגדיר את תקיית פאבליק כתקייה שהצד לקוח יכול לגשת אליה
// ולהפעיל כל קובץ כולל תמונות הטמל וכו'
app.use(express.static(path.join(__dirname, 'public')));

// מגדיר איזה ראוט להפעיל לפי היו אר אל שהמשתמש הגיע 
// אליו
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/vip", vipR);
app.use("/market", marketR);
// קשור אירור uyghu,
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// מבצע אקספורט שהקובץ 
// ./bin/www
// עושה לו אימפורט
// ובעצם מכיל את האקספרס המשתנה אפ
module.exports = app;

// 13:10 להיות כאן