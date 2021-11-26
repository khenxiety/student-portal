<?php

include "hello.php";

$input =file_get_contents('php://input');
$data=json_decode($input,true);
$message=array();
$teacherid=$data['teacherid'];
$fname=$data['fname'];
$lname=$data['lname'];
$level=$data['level'];



$query=mysqli_query($con, "INSERT INTO `userdata`(`username`, `password`, `fname`, `lname`, `level`) VALUES ('$teacherid','0','$fname','$lname','$level')");



if($query){
    http_response_code(201);
    $message['status'] = "Success";


}else{
    http_response_code(422);
    $message['status'] = "Error";
}
echo json_encode($message);
echo mysqli_error($con); 