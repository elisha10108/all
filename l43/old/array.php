<?php 
 // $fruits_ar = array("mongo","apple","banana");
 $fruits_ar = ["mongo","apple","banana","mango"];

 array_push($fruits_ar,"kiwi");
$mangoSearch = array_search("apple",$fruits_ar);
array_splice($fruits_ar,$mangoSearch,1);

  $fruits2_ar = ["melon","watermelon","coco nuts"];

  // $fruitsAll_ar = array_combine($fruits_ar,$fruits2_ar);
  // מחבר את 2 המערכים למערך אחד ענק במקרה הזה של 7 תאים סהכ
  $fruitsAll_ar = array_merge($fruits_ar,$fruits2_ar);

  $cars = [
    "name" => "mazda",
    "year" => 2020 ,
    "color" => "black"
  ];

  $cars["name"] = "toyota";

  // כדי לייצר אובייקט בקלות
  // נגדיר אותו כמערך ונבצע עליו קסטינג שיהפוך אותו לאובייקט
  $cars2 = (object)[
    "name" => "ferrari",
    "year" => 2005 ,
    "color" => "red"
  ];

  $cars2->name = "Lada";


echo "<pre>";
  print_r($fruits_ar);
  print_r($fruitsAll_ar);
  print_r($cars);
  print_r($cars2);
echo "</pre>";


