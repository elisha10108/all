<?php 

// פונקציה אנונימית
  $showName = function($name) {
    echo $name;
  };

  
  $str = "hello";
  // use -> מקביל לגלובל אבל עובד רק עם פונקציה אנונימית
  $func = function($word) use($str){
    echo $str." ".$word;
  };
  
  $showName("moshe");
  echo "<br>";
  $func("world");