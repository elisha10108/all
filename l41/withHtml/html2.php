<?php 
  $pics_ar = [
    "images/pic1.jpg",
    "images/pic2.jpg",
    "images/pic3.jpg",
    "images/pic4.jpg"
  ]
?>
<!-- 14:50 -->
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
  <div class='container-fluid'>
    <div class='container'>
       <?php foreach($pics_ar as $item) {?>
          <img src="<?php echo $item; ?>" class="w-25">
         <!-- שיטה ישנה במקום לכתוב איקו -->
          <!-- <img src="<?= $item; ?>" class="w-25"> -->
        <?php } ?>
    </div>
  </div>
</body>
</html>