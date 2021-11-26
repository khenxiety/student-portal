<?php

include "hello.php";

$input =file_get_contents('php://input');
$data=json_decode($input,true);
$message=array();
$password=$data['new_password'];

$id=$_GET['id'];

$query=mysqli_query($con, "UPDATE `auth` SET `password`='$password' WHERE `student_id` = '{$id}'");



if($query){
    http_response_code(201);
    $message['status'] = "Success";


}else{
    http_response_code(422);
    $message['status'] = "Error";
}
echo json_encode($message);
echo mysqli_error($con); 