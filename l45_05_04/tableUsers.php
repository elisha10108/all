<?php
include "./connect.php";
// השאילתא ל מסד נתונים
$select_q = "SELECT * FROM users";
// ביצוע השאילתא
$result = $conn->query($select_q);

// נאסוף את כל הנתונים מה אס קיו אל ונכניס לתוך המערך
$ar = [];
print_r($result);
// ממשיך כל עוד יכול למשוך מידע מהשאילתא לפי המסד נתונים
while ($row = mysqli_fetch_assoc($result)) {
  //print_r($row);
  // (object) -> עושה קסטינג והופך מערך אסוציאטיבי
  // לאובייקט
  // array_push -> כל פעם נוסיף למערך את השורה שנקבל עד שיגמרו השורות 
  array_push($ar, (object)$row);
};

//  $ar[0].email like in js;
// echo $ar[0]->email;

print_r($ar);


?>

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
  <div class="container">
    <h2>List of users:</h2>
    <table class="table table-strip">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>pass</th>
        </tr>
      </thead>
      <tbody>
        <?php foreach($ar as $key=>$item):?>
        <tr>
          <td><?= $item->id; ?></td>
          <td><?= $item->user; ?></td>
          <td><?= $item->email; ?></td>
          <td><?= $item->pass;?></td>
        </tr>
        <?php endforeach; ?>
      </tbody>
    </table>
  </div>
</body>

</html>