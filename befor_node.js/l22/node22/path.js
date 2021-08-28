const path = require("path");
let url = "http://fs1.co.il/bus/pixa1.php"
console.log(path.basename(url)); // pixa1.php
console.log(path.dirname(url)); //http://fs1.co.il/bus
console.log(path.extname(url)); // .php


// יחזיר את התקייה שבה נמצא הקובץ של הג'יי אס שהפעלנו
// בהמשך שנתעסק בהגדרות של השרת זה חשוב
console.log(__dirname);
// יחזיר את כל הכתובת איפה הקובץ שהפעלנו נמצא , פחות בשימוש
console.log(__filename);

// 13:10 להיות כאן