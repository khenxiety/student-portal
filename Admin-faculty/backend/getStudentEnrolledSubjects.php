<?php

include "hello.php";
$data=array();
$id=$_GET['id'];
$query= mysqli_query($con, "SELECT * FROM subjects t1 INNER JOIN student_enroll t2 ON t1.subject_id=t2.subject_id WHERE student_id='{$id}'");
// $query= mysqli_query($con, "SELECT * FROM subjects t1 INNER JOIN student_enroll t2 ON t1.subject_id=t2.subject_id INNER JOIN section t3 ON t2.section_id=t3.section_id INNER JOIN schedule t4 ON t3.section_id=t4.section_id WHERE student_id='{$id}' ");


// SELECT * FROM subjects t1 INNER JOIN student_enroll t2 ON t1.subject_id=t2.subject_id INNER JOIN section t3 ON t2.section_id=t3.section_id INNER JOIN schedule t4 ON t3.section_id=t4.section_id WHERE student_id='{$id}' LIMIT 2
while ($row = mysqli_fetch_object($query)){
    $data[]=$row;
}
echo json_encode($data);
echo mysqli_error($con);






