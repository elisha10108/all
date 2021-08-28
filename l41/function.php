<?php


  function showName(){
    echo "your name is jojo";
  }

  showName();


  $user = "koko";
  $age = 40

  function changeUser(){
    // global ->  אומר שהמשתנה יוזר ידבר עם המשתנה הגלובלי ולא יהיה  מקומי בלבד לפונקציה
    // בלי הגלובל היוזר היה בעצם משתנה שקייםרק בפונקציה ולא היה רפרנס למשתנה
    // הגלובלי מחוץ לפונקציה
    global $user, $age;
    $user = "moshe";
  }

  changeUser();
  echo "<hr>";
  echo $user;

?>

<!-- 13:10  -->