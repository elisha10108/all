<?php 

  $user = "koko";
  $age = 40;

  echo "Welcome {$user} to our site and your age is {$age} <br>";

  echo strlen($user)."<br>";
  // התייחסו לסטרינג גם כמערך של תווים
  echo $user[2]."<br>"; // k

  echo "random number: ".rand(1,100)."<br>";

  $words = "The fox is good orange fox";

  // בשונה מגיי אס מחליף את כל הצירופים ולא רק את הראשון
  echo str_replace("fox","sheep",$words)."<br>";

  echo substr($words, 4, 6)."<br>";