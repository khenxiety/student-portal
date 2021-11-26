<?php

include "hello.php";

$input =file_get_contents('php://input');
$data=json_decode($input,true);
$message=array();
$subjcode=$data['subjCode'];
$subjtitle=$data['subjTitle'];
$subjtype=$data['subjType'];


$query=mysqli_query($con, "INSERT INTO `subject`(`code`, `title`, `unit`) VALUES ('$subjcode','$subjtitle','$subjtype')");



if($query){
    http_response_code(201);
    $message['status'] = "Success";


}else{
    http_response_code(422);
    $message['status'] = "Error";
}
echo json_encode($message);
echo mysqli_error($con); 