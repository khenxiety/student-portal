<?php
include "hello.php";

$input= file_get_contents('php://input');
$message=array();

$id= $_GET['id'];
$query=mysqli_query($con, "DELETE FROM `userdata` WHERE `id`='$id'");



if($query){
    http_response_code(201);
    $message['status'] = "Success";


}else{
    http_response_code(422);
    $message['status'] = "Error";
}
echo json_encode($message);
echo mysqli_error($con); 