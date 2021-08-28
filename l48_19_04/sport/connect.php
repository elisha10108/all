<?php
// קובץ שאחראי כל כל התתחברות למסד נתונים
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "panda4";

$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
if (mysqli_connect_error()) {
  // die -> עוצר את השרת ומציג את ההודעה
  die("cant connect");
}
// שידע לתמוך בעברית ובשפות
$conn->query("SET NAMES 'utf8'");
?>