<?php 
  $user = "guest";
  // מהקובץ קווארי סטרינג
  // שולחים לינק שיש לו קווארי סטרינג עם ניים
  // query_get.php?name=koko
  // נניח למעלה יציג לנו את יוזר כקוקו
  if(isset($_GET["name"])){
    $user = $_GET["name"];
  }
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
  <h1>Welcome <?= $user; ?></h1>
</body>
</html>