<?php
 $fruits_ar = ["kiwi","apple","banana","mango"];

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
   <h1>List of fruits:</h1>
   <?php for($i = 0; $i < count($fruits_ar); $i++) {?>
    <!-- <h2><?php echo $fruits_ar[$i]; ?></h2> -->
    <h2><?= $fruits_ar[$i]; ?></h2>
   <?php } ?>
<hr>
   <?php foreach ($fruits_ar as $item) {  ?>
    <h2><?= $item; ?></h2>
    <?php  }?>

    <?php for($i = 0 ; $i < 9 ; $i++ ) :
            if($i < 5 && $i >1): ?>
             <h3><?= $i ?></h3>
             
    <?php 
            endif;
          endfor;
   ?>
 </body>
 </html>
 <!-- 10:50 -->