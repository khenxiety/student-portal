import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students:any;
  id:any;


  studentid:any;
  fname:any;
  lname:any;
  middleName:any;
  email:any;
  tosearch: any;
  individualstudents: any;
  sid: any;

  constructor(private api:ApiService) { 
    this.getStudents();
  }

  ngOnInit(): void {
  }

  getStudents(){
    this.api.getStudents().subscribe(
      res=>{
        // console.log(res);
        this.students=res;
      },
      err=>{
        console.log(err);
      }
    )
  }
  addStudent(){
    // console.log(this.studentid,this.fname,this.lname,this.middleName,this.email);
    const student={
      studentid:this.studentid,
      fname:this.fname,
      lname:this.lname,
      middleName:this.middleName,
      email:this.email
    }
    this.api.addStudent(student).subscribe(
      res=>{
        // console.log(res);
        this.getStudents();
      },
      err=>{
        console.log(err);
      }
    )
    const teacher={
      teacherid:this.studentid,
      fname:this.fname,
      lname:this.lname,
      middleName:this.middleName,
      level:"student"
    }

    this.api.addUserData(teacher).subscribe(
      data=>{
        // console.log(data);
        
      }
    ),(error: any)=>{
      console.log(error);
    }


    const add_toast=document.getElementById('addtoast')!;
    add_toast.style.display='block';
    setTimeout(()=>{
      add_toast.style.display='none';
    }
    ,2000);
  }
  deleteStudent(id:any){
    this.api.deleteStudent(id).subscribe(
      res=>{
        // console.log(res);
        this.getStudents();
      },
      err=>{
        console.log(err);
      }
    )
    const delete_toast=document.getElementById('deletetoast')!;
    delete_toast.style.display='block';
    setTimeout(()=>{
      delete_toast.style.display='none';
    }
    ,2000);
  }
  searchStudent(){
    this.api.searchStudent(this.tosearch).subscribe(
      res=>{
        // console.log(res);
        this.students=res;
      },
      err=>{
        console.log(err);
      }
    )
    if(this.tosearch==""){
      this.getStudents();
    }
  }

  getIndividualStudent(id:any){
    this.id=id;
    
    this.api.getIndividualStudent(id).subscribe(
      res=>{
        // console.log(res);
        this.individualstudents=res;
        this.individualstudents.forEach((element: { id:any; studid: any; fname: any; lname: any; middle: any; email: any; }) => {
          this.sid=element.id;
          this.studentid=element.studid;
          this.fname=element.fname;
          this.lname=element.lname;
          this.middleName=element.middle;
          this.email=element.email;
        }
        )},
      err=>{
        console.log(err);
      }
    )
  }
  reset(){
    this.studentid=null;
    this.fname=null;
    this.lname=null;
    this.middleName=null;
    this.email=null;

  }
  editStudent(){
    
    let data={
      
      studentid:this.studentid,
      fname:this.fname,
      lname:this.lname,
      middleName:this.middleName,
      email:this.email
      
    }
    // console.log(data);
    
    this.api.editStudent(this.id,data).subscribe(
      res=>{
        // console.log(res);
        this.students=res;
        this.getStudents();
      },
      err=>{
        console.log(err);
      }
    )
    const edit_toast=document.getElementById('updatetoast')!;
    edit_toast.style.display='block';
    setTimeout(()=>{
      edit_toast.style.display='none';
    }
    ,2000);
  }

}
