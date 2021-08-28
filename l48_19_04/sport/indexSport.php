<?php 
  include "./connect.php";

  $select_q = "SELECT * FROM games";
  // מבצע את הבקשה
  $result = $conn->query($select_q);

  $ar = [];
  // mysqli_fetch_assoc -> שולף את המידע שקיבלנו מה אס קיו אל 
  // מתחיל מרשומה מ0 ואחרי שמחזיר את המידע מהרשומה מתקדם לרשומה הבאה
  // ובמקרה של הלולאה שלנו כאשר יסתיימו הרשומות הוא יצא מהלולאה
  // ובעצם המשתנה ראו כל פעם מכיל רשומה אחרת
  while($row = mysqli_fetch_assoc($result)){
    // דוחף לתוך המערך כל פעם רשומה 
    // הראו בברירת מחדל מקבל את המידע כמערך אסוציאטיבי
    // ואנחנו עושים לו קאסטינג שיהפוך לאובייקט
    array_push($ar,(object)$row);
  }

  // ללא קאסטינג של אובייקט
  // echo $ar[0]["teamA"];
  // עם קאסטינג של אובייקט
  // echo $ar[0]->teamA;
  // print_r($ar);
?>
<!-- 10:50 -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1' crossorigin='anonymous'>
  <title>Document</title>
</head>
<body>
  <?php include "./header_template.php" ?>
  <main class="continar-fluid">
    <div class="container">
      <h1>Welcome to sport site</h1>
      <h2>List of games:</h2>
      <table class="table table-striped table-hover">
        <thead>
          <th>#</th>
          <th>Team A</th>
          <th>Team B</th>
          <th>Score Team A</th>
          <th>Score Team B</th>
          <th>Date</th>
          <th>Category</th>
        </thead>
        <tbody>
        <!-- $key -> מכיל את המספור שלהם
        $item  מכיל את המידע של האובייקט עם המאפיינים -->
          <?php foreach($ar as $key=>$item): ?>
            <tr>
              <td><?= $key+1 ?></td>
              <td><?= $item->teamA ?></td>
              <td><?= $item->teamB ?></td>
              <td><?= $item->scoreA ?></td>
              <td><?= $item->scoreB ?></td>
              <td><?= $item->time ?></td>
              <td><?= $item->category ?></td>
            </tr>

          <?php endforeach; ?>
        </tbody>
      </table>
    </div>
  </main>
</body>
</html>