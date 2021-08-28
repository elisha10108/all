<?php 
  if(isset($_GET["submit"])){
    echo "form submit";

    // 60*60*24 -> 24 שעות
    // setcookie("name",$_GET["name"],time()+60*60*24);
    // setcookie("email",$_GET["email"],time()+60*60*24);
    // setcookie("phone",$_GET["phone"],time()+60*60*24);
    $cookie_ar = [
      "name" => $_GET["name"],
      "email" => $_GET["email"],
      "phone" => $_GET["phone"],
    ];

    // הופך מערך לסטרינג
    $st = serialize($cookie_ar);
    setcookie("formsValue",$st ,time()+60*60*24);
    // print_r(unserialize($st));
    //toDO -> crate from array string
  }

  // בדיקה אם למחוק את הקוקיס
  if(isset($_POST["del_cookie"])){
    setcookie("formsValue","" ,time()-1);
    // setcookie("name","",time()-1);
    // setcookie("email","",time()-1);
    // setcookie("phone","",time()-1);
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

    <form class="col-lg-6">
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