<?php 
// כמו FETCH/AJAX
// רק PHP
  $dataString = file_get_contents("./jsons/vip.json");
  echo "<pre>";
    // JS -> JSON.parse() כמו בג'אווה סקריפט
    //  מייצר מערך אצוסיאטיבי בתוך מערך ממוספר
    $json_ar = json_decode(utf8_decode($dataString),true);
   print_r($json_ar);
  echo "</pre>";

  // return microsoft
  // echo $json_ar[0]["source"];
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
    <h1>List of V.I.P</h1>
    <div class="row">
    <!-- $key=>$item -->
      <?php foreach($json_ar as $key=>$item): ?>
        <div class="col-lg-6 p-2 border" >
          <img src="<?= $item["image"] ?>" class="float-start me-2 w-25" alt="vip">
          <h2><?= $item["name"] ?></h2>
          <div>Company : <?= $item["source"] ?></div>
          <a href="vipSinlge.php?index=<?=  $key ?>" class="btn btn-info">More info</a>
        </div>
      <?php endforeach; ?>
    </div>

  </div>
</body>
</html>