const fs = require("fs"); // file system

// מייצר/מעדכן קובץ ומכניס לתוכו מידע נוסף שיש בפרמטר השני
// fs.appendFile("books.txt","\nranibow six44",(err) => {
// מייצר /מעדכן קובץ ומוחק את כל מה שהיה בתוכו לפני ושם את הפרמטר השני
fs.writeFile("books.txt","ranibow six44",(err) => {
  if(err){ return console.log(err) }
  console.log("file updated/created");
})

fs.writeFile("books.html",`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Books page</h1>
</body>
</html>
`,(err) => {
  if(err){ return console.log(err) }
  console.log("file updated/created");
})