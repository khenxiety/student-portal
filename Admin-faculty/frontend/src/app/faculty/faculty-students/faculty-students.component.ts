import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-faculty-students',
  templateUrl: './faculty-students.component.html',
  styleUrls: ['./faculty-students.component.scss']
})
export class FacultyStudentsComponent implements OnInit {

  teacherid:any
  searchData:any;

  students:any


  singleStudent:any;


  prelims:any
  midterm:any
  semis:any
  finals:any
  filterdata: any;

  filteredData:any

  constructor(private api:ApiService) {
    this.teacherid=localStorage.getItem('teachid');
    console.log(this.teacherid);
    this.getStudents()
   }

  ngOnInit(): void {
  }

  getStudents(){
    this.api.getClassesStudents(this.teacherid).subscribe((res: any)=>{
      console.log(res);
      this.students=res;

      this.filteredData=res;
    }),(err: any)=>{
      console.log(err);
    }
  }

  search(){
    this.api.getClassesStudents(this.teacherid).subscribe((res: any)=>{
      console.log(res);
      this.students=res;
      this.students = this.students.filter((classes: { studid: any; }) => classes.studid === this.searchData);
      
    }),(err: any)=>{
      console.log(err);
    }
    if(this.searchData==''){
      this.getStudents();
    }

  }

  getSingleStudent(id: any){
    this.api.getClassesStudents(this.teacherid).subscribe((res: any)=>{
      
      this.students=res;
      this.singleStudent = this.students.filter((classes: { ids: any; }) => classes.ids === id);
      console.log(this.singleStudent);
      this.singleStudent.forEach((element: any) => {
        this.prelims=element.att1
        this.midterm=element.att2
        this.semis=element.att3
        this.finals=element.att4
        
      });
      
    }),(err: any)=>{
      console.log(err);
    }

    
    // this.getStudents();
    

    
  }

  updateGrades(id: any){
    console.log(id);
    let data={
      
      att1:this.prelims,
      att2:this.midterm,
      att3:this.semis,
      att4:this.finals
    }
    this.api.updateGrades(data,id).subscribe((res: any)=>{
      console.log(res);
      this.getStudents();
    }),(err: any)=>{
      console.log(err);
    }
    const update_toast = document.getElementById('update')!;
    update_toast.style.display = 'block';
    setTimeout(() => {
      update_toast.style.display = 'none';
    }
    , 2000);

  }
  filter(){
    this.api.getClassesStudents(this.teacherid).subscribe((res: any)=>{
      console.log(res);
      this.students=res;
      this.students = this.students.filter((classes: { subject: any; }) => classes.subject === this.filterdata);

      if(this.filterdata=='all'){
        this.getStudents();
      }
      
    }),(err: any)=>{
      console.log(err);
    }
    console.log(this.filterdata);
    
  }

}
