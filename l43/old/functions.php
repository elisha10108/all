<?php 
$user = "jack";
$age = 100;
function showNameAndAge($name,$age = 40){
  echo "Your name is {$name} and your age is {$age} <br>";
}


$user = "momo";
$word = "Hello";
$word2 = "My";

function showGlobalUser(){
  global $user,$age;
  echo $user." - {$age} - <br>";
}

// & -> המשתנה יגיע כרפרנס ולא כווליו לפונקציה ואז מה שמשתנה בו
// משפיע על המשתנה הגלובלי
function addToWord(&$st){
  $st .= " world";
}



addToWord($word);
addToWord($word2);

echo $word."<br>"; // hello world
echo $word2."<br>"; // my World

showNameAndAge("rambo");
showNameAndAge("moshe","45");

showGlobalUser();


// use

$userName2 = "jojo";

$showUser = function() use($userName2) {
  echo $userName2."<br>";
};

echo $showUser();

