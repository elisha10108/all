const http = require("http");

const server = http.createServer((request,response) => {
  // ריספונס אחראי לתגובה של השרת במקרה הבא פשוט

  response.writeHead(200, {'Content-Type': 'text/html'});
  // משגר לדפדפן שעושה בקשת 
  // HTTP
  // את המידע הבא
  response.write("<h2>HEllo world 5 333!</h2>");
  // אומר שהשרת סיים את התגובה שלו
  response.end();
})

// listen -> לאיזה מספר פורט להאזין
// ואז גולש כרגע במקומי יכול להכנס לכתובת
//http://localhost:3000
// ולקבל מידע מהשרת
server.listen(3000);

// 14:45 