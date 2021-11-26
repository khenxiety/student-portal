import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers: HttpHeaders;
  constructor(
    public http: HttpClient
  ) {
    this.headers = new HttpHeaders();
    this.headers.append("Accept", 'application/json');
    this.headers.append("Content-Type", 'application/json');
    this.headers.append("Access-Control-Allow-Origin", '*');


   }

  

  

  getClassInfo(){
    return this.http.get('http://localhost/Projects/Admin-faculty/backend/getClassInfo.php');

  }
  getAccount(){
    return this.http.get('http://localhost/Projects/Admin-faculty/backend/getaccounts.php');
  }
  // students page
  getStudents(){
    return this.http.get('http://localhost/Projects/Admin-faculty/backend/getStudents.php');
  }
  addStudent(data:any){
    return this.http.post('http://localhost/Projects/Admin-faculty/backend/addStudent.php',data);
  }
  deleteStudent(id:any){
    return this.http.get('http://localhost/Projects/Admin-faculty/backend/deleteStudent.php?id='+id);
  }
  searchStudent(id:any){
    return this.http.get('http://localhost/Projects/Admin-faculty/backend/searchStudent.php?id='+id);
  }
  editStudent(id:any,data:any){
    return this.http.post('http://localhost/Projects/Admin-faculty/backend/editStudent.php?id='+id,data);
  }




  // 
  //subjectpage
  getSingleSubject(id:any){
    return this.http.get('http://localhost/Projects/Admin-faculty/backend/getSingleSubject.php?id='+id);
  }
  updateSubject(id:any,data:any){
    return this.http.post('http://localhost/Projects/Admin-faculty/backend/updateSubject.php?id='+id,data);

  }
  searchSubject(id:any){
    return this.http.get('http://localhost/Projects/Admin-faculty/backend/searchSubject.php?id='+id);
  }

  //

  searchClass(id:any){
    return this.http.get('http://localhost/Projects/Admin-faculty/backend/searchClass.php?id='+id);
  }
  getSubjects(){
    return this.http.get('http://localhost/Projects/Admin-faculty/backend/getSubjects.php');
  }

  // teacher page

  getTeachersData(){
    return this.http.get('http://localhost/Projects/Admin-faculty/backend/getTeachersData.php');
  }
  searchTeacher(id:any){
    return this.http.get('http://localhost/Projects/Admin-faculty/backend/searchTeacher.php?id='+id);
  }
  updateTeacher(id:any,data:any){
    return this.http.post('http://localhost/Projects/Admin-faculty/backend/updateTeacher.php?id='+id,data);
  }

// 

  getUsers(){
    return this.http.get('http://localhost/Projects/Admin-faculty/backend/getUsers.php');
  }

  deleteUser(id:any){
    return this.http.get('http://localhost/Projects/Admin-faculty/backend/deleteUser.php?id='+id);
  }

  addSubject(data:any){
    return this.http.post('http://localhost/Projects/Admin-faculty/backend/addSubject.php',data);
  }
  deleteSubject(id:any){
    return this.http.get('http://localhost/Projects/Admin-faculty/backend/deleteSubject.php?id='+id);
  }
  getIndividualTeacher(id:any){
    return this.http.get('http://localhost/Projects/Admin-faculty/backend/getIndividualTeacher.php?id='+id);
  }
  getIndividualStudent(id:any){
    return this.http.get('http://localhost/Projects/Admin-faculty/backend/getIndividualStudent.php?id='+id);
  }

  getEnrolledStudents(id:any){
    return this.http.get('http://localhost/Projects/Admin-faculty/backend/getEnrolledStudents.php?id='+id);
  }

  enrollToClass(data:any){
    return this.http.post('http://localhost/Projects/Admin-faculty/backend/enrollToClass.php',data);
  }
  deleteEnrolledStudent(id:any){
    return this.http.get('http://localhost/Projects/Admin-faculty/backend/deleteEnrolledStudent.php?id='+id);
  }

  






  getUserPassword(id:any){
    return this.http.get('http://localhost/Projects/Admin-faculty/backend/getUserPassword.php?id='+id);
  }
  updateUserPassword(id:any,data:any){
    return this.http.post('http://localhost/Projects/Admin-faculty/backend/updatePassword.php?id='+id,data);
  }
  searchUser(id:any){
    return this.http.get('http://localhost/Projects/Admin-faculty/backend/searchUser.php?id='+id);
  }
  getStrand(){
    return this.http.get('http://localhost/Projects/Admin-faculty/backend/getStrands.php');
  }
  getSY(){
    return this.http.get('http://localhost/Projects/Admin-faculty/backend/getSY.php');
  }
  getLevel(){
    return this.http.get('http://localhost/Projects/Admin-faculty/backend/getLevel.php');
  }
  addClass(data:any){
    return this.http.post('http://localhost/Projects/Admin-faculty/backend/addClass.php',data);
  }
  deleteClass(id:any){
    return this.http.get('http://localhost/Projects/Admin-faculty/backend/deleteClass.php?id='+id);
  }
  assignTeacher(data:any,id:any){
    return this.http.post('http://localhost/Projects/Admin-faculty/backend/assignTeacher.php?id='+id,data);
  }

  // Teacher
  addTeacher(data:any){
    return this.http.post('http://localhost/Projects/Admin-faculty/backend/addTeacher.php',data);
  }
  deleteTeacher(id:any){
    return this.http.get('http://localhost/Projects/Admin-faculty/backend/deleteTeacher.php?id='+id);
  }
  addUserData(data:any){
    return this.http.post('http://localhost/Projects/Admin-faculty/backend/addUserData.php',data);
  }



  // facultyDash

  getTeacherInfo(id:any){
    return this.http.get('http://localhost/Projects/Admin-faculty/backend/getTeacherInfo.php?id='+id);
  }
  getClass(id:any){
    return this.http.get('http://localhost/Projects/Admin-faculty/backend/getClass.php?id='+id);
  }
  getTeacherStudents  (id:any){
    return this.http.get('http://localhost/Projects/Admin-faculty/backend/getTeacherStudents.php?id='+id);
  }


  // student page

  getClassesStudents(id:any){
    return this.http.get('http://localhost/Projects/Admin-faculty/backend/getClassesStudents.php?id='+id);
  }
  updateGrades(data:any,id:any){
    return this.http.post('http://localhost/Projects/Admin-faculty/backend/updateGrades.php?id='+id,data);
  }
  
}
