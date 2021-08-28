<?php 
  $url = "http://fs1.co.il/bus/bitcoin.php";
  // אוסף את כל המידע כסטרינג
  $dataString = file_get_contents($url);
  // הופכים את הסטרינג שקיבלנו בחזרה לג'ייסון
  $json_ar = json_decode(utf8_decode($dataString),true);

  // $json2_ar = unserialize($dataString);

  echo "<pre>";
    print_r($json2_ar);
  echo "</pre>";

  echo $json_ar[0]["symbol"];
  echo "<pre>";
    print_r($json_ar);
  echo "</pre>"
?>