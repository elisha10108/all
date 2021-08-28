<?php 

// נותן לו מרחב שם שונה כדי לדבר עם משתנים ומחלקות בקובץ
// מונע התנגשות של מרחבי שמות עם קבצים אחרים בפרוייקט
namespace app\monkeys;

  class User{
    public function __construct($_name)
    {
      $this->name = "Mr ".$_name;
    }

    public function printName(){
      echo "<h2>{$this->name}</h2>";
    }
  }