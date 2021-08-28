<?php 
  $num1 = 2.00;
  $num2 =  "2";

  echo $num1+$num2."<br>";
  echo $num1.$num2."<br>";

  // if($num1 === Number($num2)){
  if($num1 == (float)$num2){
    echo "hello! 22";
  }
  else{
    echo "not equal ";
  }
  echo "<br>";

  // (object) -> קסטינג לאובייקט של המערך הופך אותו לאובייקט
  $car1 = (object)[
    "name"=>"ferrari 2",
    "year"=>1984,
    "color"=>"red"
  ];
  // echo $car1.name;
  // -> = מקביל לנקודה בג'אווה סקריפט כדי לדבר עם מאפיין של אובייקט
  echo $car1->name;

  // 10:50 
?>