<?php
  $user = "koko";
  $fruits_ar = ["lemon","mango","apple","banana"];
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">

  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Document</title>
</head>
<body>
  <div class="container">
    <h1>This is php page , but show html</h1>
    <h2>User from php var: <?php echo $user; ?></h2>
    <ul>
      <?php foreach($fruits_ar as $item) { ?>
        <li><?php echo $item; ?></li>
      <?php } ?>
    </ul>

    <ul>
    <?php foreach($fruits_ar as $item) { 
     echo "<li>{$item}</li>"; 
    }?>
    </ul>
  </div>
</body>
</html>