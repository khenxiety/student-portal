<?php

include "hello.php";

$input =file_get_contents('php://input');
$data=json_decode($input,true);
$message=array();
$att1=$data['att1'];
$att2=$data['att2'];

$att3=$data['att3'];

$att4=$data['att4'];

$id=$_GET['id'];


$query=mysqli_query($con, "UPDATE `studentsubject` SET `att1`='$att1',`att2`='$att2',`att3`='$att3',`att4`='$att4' WHERE `ids`='{$id}'");



if($query){
    http_response_code(201);
    $message['status'] = "Success";


}else{
    http_response_code(422);
    $message['status'] = "Error";
}
echo json_encode($message);
echo mysqli_error($con); 