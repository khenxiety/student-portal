<?php

include "hello.php";
$data=array();
$id=$_GET['id'];
$query= mysqli_query($con, "SELECT * FROM `userdata` WHERE `fname` LIKE '{$id}' OR `lname` LIKE '{$id}' OR `username` LIKE '{$id}' ");

while ($row = mysqli_fetch_object($query)){
    $data[]=$row;
}
echo json_encode($data);
echo mysqli_error($con);