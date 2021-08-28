<?php 
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
  include "./connect.php";


  if(isset($_GET['cat'])){
    $query = "SELECT * FROM shop WHERE cat = ? ";
    $stmnt = $conn->prepare($query);
    $stmnt->bind_param("s", $_GET['cat']);
    $stmnt->execute();

    $data = $stmnt->get_result();

    $ar = [];
    while($row = mysqli_fetch_assoc($data)){
      array_push($ar, (object)$row);
    }
    echo json_encode($ar);
  }

  // if(isset($_GET['cat'])){
  //   $query = "SELECT * FROM shop WHERE cat = '{$_GET['cat']}' ";
  //   $data = $conn->query($query);

  //   $ar = [];
  //   while($row = mysqli_fetch_assoc($data)){
  //     array_push($ar, (object)$row);
  //   }
  //   echo json_encode($ar);
  // }