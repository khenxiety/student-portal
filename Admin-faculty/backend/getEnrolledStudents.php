<?php

include "hello.php";
$data=array();
$id=$_GET['id'];
$query= mysqli_query($con, "SELECT * FROM `studentsubject` t1 INNER JOIN student t2 ON t1.studid=t2.id WHERE `classid`='{$id}'");




while ($row = mysqli_fetch_object($query)){
    $data[]=$row;
}
echo json_encode($data);
echo mysqli_error($con);






