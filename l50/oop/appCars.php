<?php 
  include "./carClass.php";
  include "./static_class.php";
  include "./gameClass.php";

  $car = new CarClass("lada","blue",1985);
  $car2 = new CarClass("ferrari","red",2010);


    // $tax = new TaxClass();
    // $tax->addVat()

    // :: כדי לדבר עם מיטודה שהיא סטטית
    // echo TaxClass::addVat(100);
    GameClass::addLife(9);
    echo GameClass::$lives;


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

    <?= $car->render(); ?>
    <?= $car2->render(); ?>
  </body>
  </html>