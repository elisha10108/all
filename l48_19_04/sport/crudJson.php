<?php
// מקביל ל res.json
// באקספרס
  header('Content-Type: applicati on/json');
include "./connect.php";
// ננסה להבין איך אנחנו אוספים פוסט מבאדי
// ואז נעשה שאלתות CRUD

// $_POST -> רק כאשר יש מידע שמגיע מטופס כפוסט שממש מרפרש את הדפדפן

// ככה אוספים מידע שמגיע כבאדי מהצד הלקוח
$entityBody = file_get_contents('php://input');
// print_r($entityBody);
// החזרנו את הג'ייסון שהגיע כסטרינג לפורמט שפי אץ פי מכיר ואז נוכל לבצע לולאות ולדבר עם המאפיינים
$phpData = json_decode($entityBody);
// print_r($phpData);
// echo $phpData->user;

// 14:50

switch ($_SERVER["REQUEST_METHOD"]) {
  case "POST":
    // echo "post request";
    $query = "INSERT INTO shop (cat,name,price) VALUES ('{$phpData->cat}','{$phpData->name}',{$phpData->price})";
    $conn->query($query);
    echo "{id:".$conn->insert_id."}";
    break;
  case "PUT":
    $editId = $_GET["id"];
    $query = "UPDATE shop SET cat = '{$phpData->cat}' , name = '{$phpData->name}' , price = {$phpData->price} WHERE id = {$editId}";
    $conn->query($query);
     echo "{n:".$conn->affected_rows."}";
    // print_r($conn);
    break;
  case "DELETE":
    $delId = $_GET["id"];
    $query = "DELETE FROM shop WHERE id = {$delId}";
    $conn->query($query);
     echo "{n:".$conn->affected_rows."}";
    break;
  default:
    echo "GET  request";
    break;
} 
  // print_r($_REQUEST);
