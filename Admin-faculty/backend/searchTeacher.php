<?php

include "hello.php";
$data=array();
$id=$_GET['id'];
$query= mysqli_query($con, "SELECT * FROM `teacher` WHERE `teachid` LIKE '{$id}' OR `fname` LIKE '{$id}' OR `lname` LIKE '{$id}'  ");

while ($row = mysqli_fetch_object($query)){
    $data[]=$row;
}
echo json_encode($data);
echo mysqli_error($con);