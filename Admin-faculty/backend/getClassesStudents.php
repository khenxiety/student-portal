<?php

include "hello.php";
$data=array();
$id=$_GET['id'];
$query= mysqli_query($con, "SELECT * FROM `studentsubject` t1 INNER JOIN `class` t2 ON t1.classid=t2.id INNER JOIN `student` t3 ON t1.studid=t3.id WHERE t2.teacher='{$id}'");

while ($row = mysqli_fetch_object($query)){
    $data[]=$row;
}
echo json_encode($data);
echo mysqli_error($con);