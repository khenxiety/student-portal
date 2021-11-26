<?php

include "hello.php";

$input =file_get_contents('php://input');
$data=json_decode($input,true);
$message=array();
$studentid=$data['studentid'];
$fname=$data['fname'];
$lname=$data['lname'];
$email=$data['email'];
$middleName=$data['middleName'];




$query=mysqli_query($con, "INSERT INTO `student`( `studid`, `fname`, `lname`, `middle`, `email`) VALUES ('$studentid','$fname','$lname','$middleName','$email')");



if($query){
    http_response_code(201);
    $message['status'] = "Success";


}else{
    http_response_code(422);
    $message['status'] = "Error";
}
echo json_encode($message);
echo mysqli_error($con); 