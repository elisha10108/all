<?php 
  $array = ["apple","banana","kiwi"];
  // הופך מערך לסטרינג כדי שנוכל למשל לשמור במסד נתונים או בקוקיס /סיישן
  $arrayString = serialize($array);
  echo $arrayString;
  // setcookie("myArray",$arrayString,time()+3600);
  if(isset($_COOKIE["myArray"])){
    // הופך סטרינג למערך רק למידע שעשינו עליו סירלאייז לפני
    $stToArray = unserialize($_COOKIE["myArray"]);
    echo "<pre>";
    print_r($stToArray);
    echo "</pre>";
    // echo $stToArray;
  }

  // שיטה עדיפה שעושים בקשות איי פי איי ומקבלים JSON
// עוד אפשרות להפוך מערך או ג'ייסון לסטרינג
  $stt3 = json_encode($array);
  echo $stt3;
  // הופך סטרינג בחזרה לג'ייסון/מערך
  $ar = json_decode($stt3);
  print_r($ar);
  // $cookie_ar = [
  //   "name" => $_GET["name"],
  //   "email" => $_GET["email"],
  //   "phone" => $_GET["phone"],
  // ];

  // // הופך מערך לסטרינג
  // $st = serialize($cookie_ar);
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
  
</body>
</html>