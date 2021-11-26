<?php

include "hello.php";
$data=array();
$id=$_GET['id'];
$query= mysqli_query($con, "SELECT * FROM `student_registration` WHERE `student_id`= '{$id}' ");

while ($row = mysqli_fetch_object($query)){
    $data[]=$row;
}
echo json_encode($data);
echo mysqli_error($con);