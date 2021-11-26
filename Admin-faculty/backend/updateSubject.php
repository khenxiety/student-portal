<?php

include "hello.php";

$input =file_get_contents('php://input');
$data=json_decode($input,true);
$message=array();
$id=$_GET['id'];
$subjCode=$data['subjCode'];
$subjTitle=$data['subjTitle'];
$subjType=$data['subjType'];




$query=mysqli_query($con, "UPDATE `subject` SET `code`='$subjCode',`title`='$subjTitle',`unit`='$subjType' WHERE `id`={$id}");



if($query){
    http_response_code(201);
    $message['status'] = "Success";


}else{
    http_response_code(422);
    $message['status'] = "Error";
}
echo json_encode($message);
echo mysqli_error($con); 