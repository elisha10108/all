<?php 

namespace app\cars;
  class Car{
    public function __construct($_name)
    {
      $this->name = $_name;    
    }

    public function printName(){
      echo "<h2>{$this->name}</h2>";
    }
  }