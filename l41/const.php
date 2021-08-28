<?php
  // כדי לייצר קבוע
  define("API_URL","http://localhost/");
  echo "the url is ".API_URL." of the site <br>";


  define("FRUITS_AR",["banana","apple","kiwi"]);
  // FRUITS_AR[0] = "orange";
  // שמגדירים קבוע בשונה מג'אווה סקריפט לא ניתן גם לשנות את המאפיינים שלו
  // או את התאים גם אם זה אובייקט מיוחד
  echo FRUITS_AR[0]."<br>";
?>