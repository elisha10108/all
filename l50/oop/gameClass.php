<?php 
// מחלקה סטטית אין צורך לעשות ניו
  class GameClass{
    // מייצר קבוע מאפיין במחלקה והוא מתנהג כסטטי
    const START_LIVES = 3;
    static $lives = 3;
    static $score = 0;

    static function addLife($val){
      // self -> המחלקה עצמה שמדברים עם מאפיין
      // או מיטודה סטטית
      // GameClass::$lies
      self::$lives += $val;
    }

    static function resetLives(){
      self::$lives = self::START_LIVES;
    }

  }

  