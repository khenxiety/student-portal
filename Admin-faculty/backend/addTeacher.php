<?php

include "hello.php";

$input =file_get_contents('php://input');
$data=json_decode($input,true);
$message=array();
$teacherid=$data['teacherid'];
$fname=$data['fname'];
$lname=$data['lname'];
$email=$data['email'];
$phone=$data['phone'];




$query=mysqli_query($con, "INSERT INTO `teacher`( `teachid`, `fname`, `lname`, `email`, `phone`) VALUES ('$teacherid','$fname','$lname','$email','$phone')");



if($query){
    http_response_code(201);
    $message['status'] = "Success";


}else{
    http_response_code(422);
    $message['status'] = "Error";
}
echo json_encode($message);
echo mysqli_error($con); 