<?php 
// דוגמא לבקשת  API
$url = "https://pixabay.com/api/?key=15489555-318fcca1200a48f374a1ce3ea&q=yellow+flowers&image_type=photo&pretty=true";
$dataString = file_get_contents($url);
$json_ar = json_decode(utf8_decode($dataString),true);
echo $json_ar["hits"][0]["tags"];

echo "<pre>";
print_r($json_ar["hits"]);
echo "</pre>"
?>