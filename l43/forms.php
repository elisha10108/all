<?php 
  // איך אנחנו אוספים קווארי סטרינג
  echo "<pre>";
  // print_r($_GET);
  // print_r($_POST);
  // $_REQUEST -> יודע גם לעבוד מול פוסט וגם מול גט
  print_r($_REQUEST);
  echo "</pre>";

  $user = "guest";
  // isset -> אם המשתנה קיים או התא במקרה שלנו בגט קיים
  if(isset($_GET["txt_name"])){
    $user = $_GET["txt_name"];
  }

  if(isset($_POST["txt_name"])){
    $user = $_POST["txt_name"];
  }
  
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
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



    <h2>Order pizza form GET:</h2>
    <form class=" col-lg-6 shadow p-2" method="GET">
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