<?php

// כדי שנוכל לעבוד עם סיישן חייבים שהפונקציה הזאת תיהיה קיימת באפלקציה
  session_start();

  // print_r($_SESSION);
  
  if(isset($_GET["submit"])){
    $_SESSION["name"] = $_GET["name"];
  }
  
  if(isset($_POST["del_session"])){
    // מוחק סיישן
    unset($_SESSION["name"]);
  }
  
  $username = isset($_SESSION["name"]) ? $_SESSION["name"] : "guest"; 
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1' crossorigin='anonymous'>
  <title>Document</title>
</head>
<body>
  <div class="container">
    <form method="post">
      <button name="del_session" class="btn btn-danger">delete session</button>
    </form>

    <form class="col-lg-6">
    <h1>Please log in, <?= $username ?> </h1>
      <div class="mb-3"> 
        <label for="id_name" class="form-label">Name</label>
        <input type="text" class="form-control" id="id_name" name="name" >
      </div>
      <button name="submit" value="ok" type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</body>
</html>