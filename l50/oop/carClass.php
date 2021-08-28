<?php 
  class CarClass{
    // const yad = 1;

    function __construct($_name,$_color,$_year)
    {
        $this->name = $_name;
        $this->color = $_color;
        $this->year = $_year;
    }
    
    function render(){
      $st = "<h2>{$this->name}</h2>";
      $st .= "<div>Color: {$this->color}</div>";
      $st .= "<div>year: {$this->year} </div>";
      // $st .= "<div>Yad: {$this->yad} </div>";
      return $st;
    }

   

  }
