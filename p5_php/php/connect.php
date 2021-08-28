<?php
// קובץ שאחראי כל כל התתחברות למסד נתונים
$dbhost = "localhost";
$dbuser = "id16802326_panda12";
$dbpass = 'gz_++-t4^EDUj{Nt';
$dbname = "id16802326_panda";

// ככה אני מזהה שאני בשרת מקומי
if ($_SERVER["SERVER_ADDR"] == "::1") {
  $dbhost = "localhost";
  $dbuser = "root";
  $dbpass = "";
  $dbname = "panda4";
}



$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
if (mysqli_connect_error()) {
  // die -> עוצר את השרת ומציג את ההודעה
  die("cant connect");
}
// שידע לתמוך בעברית ובשפות
$conn->query("SET NAMES 'utf8'");
