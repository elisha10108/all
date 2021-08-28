<?php 
  if(isset($_FILES["my_file"])){
    echo "<pre>";
    print_r($_FILES["my_file"]);
    echo "</pre>";

    // בודק אם גודל הקובץ קטן מ 2 מב
    // 1 KB = 1024 BYTES
    // 1 MB = 1024 KB
    if($_FILES["my_file"]["size"] < 2 * 1024 * 1024){
      // tmp_name -> מיקום זמני שהקובץ עלה אליו
      if(move_uploaded_file($_FILES["my_file"]["tmp_name"],"./images/".$_FILES["my_file"]["name"])){
        echo "file uploaded <br>";
      }
      else{
        echo "there is error upload files try again later <br>";
      }
    }
    else{
      echo "file too big !!!!";
    }

  }
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
<!-- enctype="multipart/form-data" -> חובה בשביל שנוכל לשגר קבצים ו
פי אץ פי אדע לאסוף אותם 
וחייב להיות בשיטת פוסט -->
  <form method="POST" enctype="multipart/form-data">
   <label>Chood file:</label>
   <input type="file" name="my_file" >
   <br>
   <button>Upload</button>
  </form>
</body>
</html>