<?php 
  include "./classes/user.php";
  include "./classes/user2.php";
  include "./classes/car.php";

  // יוכל להשתמש במרחב וישר להשתמש בקאר
  use app\cars\Car;
  // משתמש במרחב ומשנה לו את השם ל יוזרניים ככה
  // שנוכל להשתמש ב2 המחלקות שיש להם את אותו שם
  // as -> alias
  use app\monkeys\User as Username;

  $user1 = new User("koko");
  $user1->printName();

  $user2 = new Username("moshe");
  $user2->printName();

  $car = new Car("mazda");
  $car->printName();