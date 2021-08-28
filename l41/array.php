<?php 
  $fruits_ar = ["lemon","apple","banana","kiwi","mango"];
  // יש גם POP , SHIFT , UNSHIFT
  array_push($fruits_ar, "orange"); 

  $bananaIndex = array_search("banana",$fruits_ar); // מחזיר את האינדקס של הסטרינג בננה 
  array_splice($fruits_ar,$bananaIndex,1);

  shuffle($fruits_ar); // מערבב את המערך
  // כמו LENGTH ב JS
  echo count($fruits_ar);

  echo "<pre>";
    print_r($fruits_ar);
    // var_dump
    echo "</pre>";

  for($i = 0 ; $i < count($fruits_ar); $i++){
    echo "<h2>{$fruits_ar[$i]}</h2>";
  }

  // like fruits_ar.forEach(item => { ...})
  foreach($fruits_ar as $item){
    echo "<h4>{$item}</h4>";
  }
