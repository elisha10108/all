<?php 
  function showName($name = "optimus"){
    echo "Your name is : $name <br>";
  }

  showName("koko");
  showName("jack");
  showName();

  // &-> by refernce משפיע על המשתנה עצמו שהעברת ולא על הערך 
  function addVAT(&$price){
    $price *= 1.17;
  }

  $ps5_price  = 1000;
  addVAT($ps5_price);

  echo $ps5_price;