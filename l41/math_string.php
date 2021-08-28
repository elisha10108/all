<?php 
  echo pi()."<br>";

  echo "min ".min(3,9,10,7)."<br>";
  echo "max ".max(3,9,10,7)."<br>";

  //abs -> גם מספר שלילי יהפוך לחיובי
  echo "floor od 4.3: ".floor(4.3)."<br>";
  echo "ceil of 4.3: ".ceil(4.3)."<br>";

  // rand -> מספר רנדומלי מ4 עד 10
  echo "random:".rand(4,10)."<br>"; 

  //string 

  $user = "koko";
  $age = 50;

  echo "Welcome guest to our site <br>";
  echo "Welcome ".$user." to our site <br>";
  echo "Welcome new $user to our site <br>";

  echo "Your age is {$age}and you \"smart\" <br>";
  echo 'Your age is {$age}and you smart <br>';
  echo `not show {$age}and you smart <br>`;
?>