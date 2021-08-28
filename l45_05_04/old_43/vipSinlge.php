<?php 
  define("NAME","name");
  define("IMAGE","image");
  define("COMPANY","source");
  define("MONEY","worth");
  define("_YEAR","birth_year");

  $index = 0;
  // $_GET["index"] ->  like req.query.index in nodejs
  if(isset($_GET["index"])){
    $index = $_GET["index"];
  }
  // כמו אג'אקס
  $dataString = file_get_contents("./jsons/vip.json");
  // הוא מתקבל כסטרינג וככה הופכים אותו למערך בדומה לפארס בג'אווה סקריפט
  $json_ar = json_decode(utf8_decode($dataString),true);

// אוסף רק את התא שיש בו את המידע על אותו וי איי פי
  $vipItem = $json_ar[$index];

?>
<!-- 14:50 -->

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
  <div class="container text-center">
    <h1>Info about: <?= $vipItem[NAME] ?></h1>
    <img src="<?=  $vipItem[IMAGE] ?>" class="w-25" alt="vip">
    <div>Money: <?= $vipItem[MONEY] ?></div>
    <div>Birth year: <?= $vipItem[_YEAR] ?></div>
    <a href="vipApi.php">Back to list</a>
  </div>
</body>
</html>