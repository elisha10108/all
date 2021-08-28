<?php
// חיבור לדב
  include "./connect.php";
  header('Content-Type: applicati on/json');

  // איסוף עמודים וכמה להציג פר דף
  $limit = isset($_GET["limit"]) ? $_GET["limit"] : 3;
  $page =  isset($_GET["page"]) ? $_GET["page"]*$limit : 0;  

  // TODO: in connect.php do function that get query and return array with results
  // נחזיר את כל הטבלה שיש לנו עם הגבלה ל 20 רשומות כג'ייסון
  $query = "SELECT * FROM games LIMIT $page,$limit";
  
  // נאסוף קווארי סטרינג שנקרא קטגורי שמציג משחקים ספציפים שיש
  if(isset($_GET["cat"])){
    $query = "SELECT * FROM games WHERE category = '{$_GET["cat"]}' LIMIT $page,$limit";

  }
// 13:11
    // נעשה גם חיפוש בשמות של הקבוצות
  // % -> אם לפני או אחריי יש סטרינג נוסף גם יתקבל ובעצם מחפש את הביטוי
  if(isset($_GET["search"])){
    $query = "SELECT * FROM games WHERE teamA  LIKE '%{$_GET["search"]}%' OR teamB LIKE '%{$_GET["search"]}%' LIMIT $page,$limit";
  }

  $result = $conn->query($query);
  $json_ar = [];
  while($row = mysqli_fetch_assoc($result)){
    array_push($json_ar,(object)$row);
  }

  // print_r($js)
  // json_encode ->  הופך לסטרינג בפורמט ג'ייסון ככה שהצד לקוח יוכל לעשות בקשות איי פי איי
  echo json_encode($json_ar);






