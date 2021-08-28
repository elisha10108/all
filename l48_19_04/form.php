<?php
  $message = "";
  $email = "";
  // if(isset($_GET["submit"])){
  //   $message = "form sended";
  //   $email = $_GET["email"];
  // }
  if(isset($_POST["submit"])){
    $message = "form post sended";
    $email = $_POST["email"];
    setcookie("email",$email,time() + 60 * 60);
    
    
  }



  if(isset($_COOKIE["email"])){
    $message = "email is = ".$_COOKIE["email"];
   
  }

  if(isset($_POST["del_cookie"])){
    setcookie("email",NULL, time() -1);
     // refresh the browser
     header("Refresh:0;");
  }

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
      <button name="del_cookie" class="btn btn-danger">delete cookies</button>
    </form>
    <h1 class="text-danger">
      <?= $message; ?>
    </h1>
    <form class="col-lg-6 shadow p-3" method="POST">
    <h1>Order cake form</h1>
      <div class="mb-3">
        <label for="id_name" class="form-label">Name</label>
        <input type="text" class="form-control" id="id_name" name="name" >
      </div>
      <div class="mb-3">
        <label for="id_email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="id_email"  name="email">
      </div>
      <div class="mb-3">
        <label for="id_phone" class="form-label">Phone</label>
        <input type="tel" class="form-control" id="id_phone" name="phone">
      </div>

      <button name="submit" value="ok" type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</body>
</html>