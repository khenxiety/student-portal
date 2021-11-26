import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  subjectsLength:any;
  teachersLength:any;
  studentsLength:any;
  usersLength:any;

  constructor(private api:ApiService) {
    this.getSubjects();
   }

  ngOnInit(): void {
  }
  getSubjects(){
    this.api.getSubjects().subscribe(res=>{
      // console.log(res);
      this.subjectsLength=res;
      // console.log(this.subjectsLength);
    })
    this.api.getTeachersData().subscribe(res=>{
      // console.log(res);
      this.teachersLength=res;
      
    })
    this.api.getStudents().subscribe(res=>{
      // console.log(res);
      this.studentsLength=res;
      
    })
    this.api.getUsers().subscribe(res=>{
      // console.log(res);
      this.usersLength=res;
      
    })

  }

}
