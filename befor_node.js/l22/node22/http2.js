const http = require("http");
const fs = require("fs");

const server = http.createServer((request,response) => {
  // יטען את העמוד
  // request.url -> יחזיר את הכתובת שאנחנו נמצאים בה בתוך הלוקאלהוסט
  fs.readFile("public"+request.url,(err,data) => {
    // נקבל אירור שהקובץ שננסה לטעון לא קיים
    if(err){
      // במצב של טעות יציג 404
      response.writeHead(404, {'Content-Type': 'text/html'});
        response.write(`<h2>Page 404 , not found</h2>`);
        return response.end();
    }
    response.writeHead(200, {'Content-Type': 'text/html'});
  //  console.log(data.toString());
  // מתרגמים לסטרינג כי בברירת מחדל הדאטא מגיע כבאפר של מספרים
  // שיכולים בהמשך ליצור בעיות בקריא
    response.write(data.toString());
    // אומר שהשרת סיים את התגובה שלו
    response.end();
  })
  
})

// listen -> לאיזה מספר פורט להאזין
// ואז גולש כרגע במקומי יכול להכנס לכתובת
//http://localhost:3000
// ולקבל מידע מהשרת
server.listen(3000);


// MEARN STACK ->

// Mongo , EXPRESS , ANGULAR/REACT , NODEJS