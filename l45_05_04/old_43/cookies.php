<?php 
  // איך מגדירים קוקיס שנשמר על המחשב של הלקוח לעומת סיישן
  // time() -> מחזיר את הזמן יוניקס של עכשיו
  setcookie("user","biden",time() + 60*60*24);

  $user = "guest";
  // בודק אם הקוקי קיים
  if(isset($_COOKIE["user"])){
    //$_COOKIE -> פקודה לאיסוף קוקי
    $user = $_COOKIE["user"];
  }

  // איך למחוק קוקי
  setcookie("user","",time() - 1);
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
<div class="container">
    <h1>Welcome <?= $user ?> to our site</h1>
    <h2>Order pizza form POST:</h2>
    <form class=" col-lg-6 shadow p-2" method="POST">
      <div class="d-flex mb-3">
        <label class="col-form-label me-2">Name:</label>
        <input class="form-control" type="text" name="txt_name" >
      </div>
      <div class="d-flex mb-3">
        <label class="col-form-label me-2">Email:</label>
        <input class="form-control" type="email" name="txt_email" >
      </div>
      <button class="btn btn-info">Order</button>
    </form>
  </div>
</body>
</html>