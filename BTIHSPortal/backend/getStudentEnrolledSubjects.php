<?php

include "hello.php";
$data=array();
$id=$_GET['id'];
$query= mysqli_query($con, "SELECT * FROM `studentsubject` t2 INNER JOIN `class` t3 ON t2.classid=t3.id INNER JOIN `subject` t4 ON t3.subject=t4.code INNER JOIN `teacher` t5 ON t5.id=t3.teacher WHERE t2.studid = '{$id}'");

while ($row = mysqli_fetch_object($query)){
    $data[]=$row;
}
echo json_encode($data);
echo mysqli_error($con);






