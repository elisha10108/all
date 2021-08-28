<?php 
  $lives = 3;

  echo ($lives > 0) ? "you alive" : "game over";

  $day = 1;
  echo "<br>";
  switch($day) {
    case 0 : 
      echo "sunday";
      break;
    case 1 :
      echo "monday";
      break;
    case 2:
      echo "thrusday";
      break;
    default: 
      echo "shabat";
      break;
  }

?>