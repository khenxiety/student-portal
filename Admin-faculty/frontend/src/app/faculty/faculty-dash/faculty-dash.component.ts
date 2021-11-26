import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-faculty-dash',
  templateUrl: './faculty-dash.component.html',
  styleUrls: ['./faculty-dash.component.scss']
})
export class FacultyDashComponent implements OnInit {


  teacherInfo:any;
  teachid:any;
  name:any;

  classes:any;
  studentsList: any;

  num=0;

  constructor(private api:ApiService) { 
    console.log(localStorage.getItem('user'));
    this.getTeacherInfo();

    

    
  }

  ngOnInit(): void {
  }

  getTeacherInfo(){
    this.api.getTeacherInfo(localStorage.getItem('user')).subscribe((res: any)=>{
      console.log(res);
      this.teacherInfo = res;
      this.teacherInfo.forEach((element: any) => {
        this.teachid = element.id;
        this.name = element.fname;
        localStorage.setItem('teachid', this.teachid);
        // console.log(this.teachid);
        
      });
      this.api.getClass(this.teachid).subscribe((classes: any)=>{
        console.log(classes);
        this.classes = classes;
  
      })
      this.api.getTeacherStudents(this.teachid).subscribe((students: any)=>{
        console.log(students);
        this.studentsList = students;

        this.studentsList.forEach((element: any) => {
          console.log(element.studid);
          if(element.studid == element.studid){
            this.num++;
          }
          

          
        })
        console.log(this.num);
      })

    })
    
    
  }

  


}
