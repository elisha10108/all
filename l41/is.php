<?php 
  $x = "5.2";

  // בדיקה אם המשתנה איקס קיים
  // isset -> חשוב כי אם מנסים לבדוק אם משתנה קיים בלי הפונקציה מקבלים אזהרה בקוד
  if(isset($x)){
    echo $x."<br>";
  }
  else{
    // יחזיר אילס גם במקרה שהאיקס נאל
    // null  -> יחזיר שלא קיים
    echo "x is null <br>";
  }

  // בודק את הטיפוס של המשתנה
  if(is_int($x)){
    echo "x is int";
  }
  else if(is_float($x)){
    echo "x is float";
  }
  else if(is_string($x)){
    echo "x is string";
  }

  echo "<hr>";
  $y = [];

  // 0 and false and null and empty string,array or object also return empty
  if(empty($y)){
    echo "y is empty 9999!";
  }
  else{
    echo "y is not empty";
  }

  // דוגמאות נוספות ל IS
  // is_numeric // בדוק אם הוא ממשפחת המספרים פלואט או אינט
  // is_bool
  // is_null
?>