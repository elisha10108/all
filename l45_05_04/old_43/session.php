<?php 
  // כדי שנוכל בכלל לעבוד עם סיישן אנחנו חייבים קודים לקרוא לפונקציה הבאה
  session_start();
  // סיישן דומה לקוקיס רק שברירת מחדל ובדרך כלל נשמור אותו עד שהדפדפן נסגר 
  // לעומת קוקיס שבדרך כלל שומרים אותו לכמה דקות פלוס גם אם הדפדפן נסגר
  $_SESSION["user"] = "koko";
  $_SESSION["age"] = "50";

  // סיישן לעומת קוקיס לא חשוף בצד לקוח ואם נרצה לראות מה יש כרגע בסיישן ניהיה חייבים
  // להשתמש בפרינט אר
  print_r($_SESSION);


?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Welcome to session world</h1>
</body>
</html>