import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  student_login=false;
  faculty_login=false;
  admin_login=false;

  constructor() { 


    
  }

  ngOnInit(): void {

    
  }




  openStudentForm(){
    // responsible for login form modals
    this.student_login=true;
    this.faculty_login=false;
    this.admin_login=false;
    // 
    // responsible for login ubttons
    const student_button = window.document.getElementById('student')!;
    const admin_button = window.document.getElementById('admin')!;
    const faculty_button = window.document.getElementById('faculty')!;
    
    faculty_button.style.display="block";
    admin_button.style.display="block";
    student_button.style.display="none"

    // 
  }
  openAdminForm(){
    this.admin_login=true;
    this.student_login=false;
    this.faculty_login=false;
    const student_button = window.document.getElementById('student')!;
    const admin_button = window.document.getElementById('admin')!;
    const faculty_button = window.document.getElementById('faculty')!;
    
    faculty_button.style.display="block";
    admin_button.style.display="none";
    student_button.style.display="block"
  }
  openFacultyForm(){
    this.admin_login=false;
    this.student_login=false;
    this.faculty_login=true;
    const student_button = window.document.getElementById('student')!;
    const admin_button = window.document.getElementById('admin')!;
    const faculty_button = window.document.getElementById('faculty')!;
    faculty_button.style.display="none";
    admin_button.style.display="block";
    student_button.style.display="block";
  }

  back(){
    this.admin_login=false;
    this.student_login=false;
    this.faculty_login=false;
    const student_button = window.document.getElementById('student')!;
    const admin_button = window.document.getElementById('admin')!;
    const faculty_button = window.document.getElementById('faculty')!;
    faculty_button.style.display="block";
    admin_button.style.display="block";
    student_button.style.display="block";

  }

  toggle(){
    const password = document.querySelector('#id_password')!;
 
    
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    

  }


}
