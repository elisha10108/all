<?php 
  $user = "koko";
  $num = 5;
  $flag = true;
  $nullVar = NULL;

  // . -> מייצג שרשור בין סטריגנים בשונה מהפלוס בג'אווה סקריפט
  echo "user:".$user."<br>";
  echo "num:".$num."<br>";
  echo "flag:".$flag."<br>";
  echo "null:".$nullVar."<br>";

  $fruits_ar = ["lemon","kiwi","apple","banana"];
  echo $fruits_ar[1]."<br>";

  //  pre -> תגית איך שרשום ככה יוצג
  echo "<pre>";
  // פקודה הודמה לקונסול לוג רק שמדפיס את עצמו בדפדפן
  // הפרינט אר מאחורי הקלעים כותב את הקוד יפה בשורות וטאבים ולכן חשבו התגית פרי
  print_r($fruits_ar);
  echo "<br>";
  // דומה לפרינט אר אך עם יותר פירוט כגון סוג
  var_dump($fruits_ar);

  echo "</pre>";

  // בשפה הזאת פחות עובדים עם אובייקטים ישירות אלא יותר עם מערכים אסוציטיבים
  $car1_ar = ["name"=>"mazda", "year"=>2002 , "color"=>"red"];
  echo $car1_ar["name"];

  echo "<pre>";
  var_dump($car1_ar);

  echo "</pre>"
?>