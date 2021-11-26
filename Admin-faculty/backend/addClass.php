<?php

include "hello.php";

$input =file_get_contents('php://input');
$data=json_decode($input,true);
$message=array();
$semester=$data['semester'];
$level=$data['level'];
$subject=$data['subject'];
$strand=$data['strand'];
$section=$data['section'];
$schoolyear=$data['schoolyear'];


$query=mysqli_query($con, "INSERT INTO `class`( `course`, `year`, `section`, `sem`, `teacher`, `subject`, `SY`) VALUES ('$strand','$level','$section','$semester','0','$subject','$schoolyear')");



if($query){
    http_response_code(201);
    $message['status'] = "Success";


}else{
    http_response_code(422);
    $message['status'] = "Error";
}
echo json_encode($message);
echo mysqli_error($con); 