<?php

include "hello.php";

$input =file_get_contents('php://input');
$data=json_decode($input,true);
$message=array();
$studid=$data['studid'];
$classid=$data['classid'];



$query=mysqli_query($con, "INSERT INTO `studentsubject`(`studid`, `classid`, `att1`, `att2`, `att3`,`att4`, `exam1`, `exam2`, `exam3`, `quiz1`, `quiz2`, `quiz3`, `project1`, `project2`, `project3`) VALUES ('$studid','$classid','0','0','0','0','0','0','0','0','0','0','0','0','0')");



if($query){
    http_response_code(201);
    $message['status'] = "Success";


}else{
    http_response_code(422);
    $message['status'] = "Error";
}
echo json_encode($message);
echo mysqli_error($con); 