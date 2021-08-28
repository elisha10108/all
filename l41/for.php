<?php 
  for($i = 0 ; $i < 5 ; $i++){
    echo ($i+1)."<br>";
  }

  echo "<hr>";
  for ($i = 0 ; $i < 10 ; $i++){
    if($i == 4){
      // יעצור את הלולאה ב4
      break;
    }
    echo $i."- for<br>";
  }

  echo "<hr>";
  for ($i = 0 ; $i < 10 ; $i++){
    if($i == 4){
      // ידלג על 4
      continue;
    }
    echo $i."- for<br>";
  }
?>