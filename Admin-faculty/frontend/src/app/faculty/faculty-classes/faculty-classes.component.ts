import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-faculty-classes',
  templateUrl: './faculty-classes.component.html',
  styleUrls: ['./faculty-classes.component.scss']
})
export class FacultyClassesComponent implements OnInit {
  teachid: any;
  classes: any;

  constructor(private api:ApiService) { 
    this.teachid=localStorage.getItem('teachid');
    console.log(this.teachid);
    this.getClasses()
  }

  ngOnInit(): void {
  }


  getClasses(){
    this.api.getClass(this.teachid).subscribe((classes: any)=>{
      console.log(classes);
      this.classes = classes;
      this.classes = this.classes.filter((classes: { sem: any; }) => classes.sem === '1st');



    })
  }
  firstsem(){
    this.api.getClass(this.teachid).subscribe((classes: any)=>{
      console.log(classes);
      this.classes = classes;
      this.classes = this.classes.filter((classes: { sem: any; }) => classes.sem === '1st');
    })
  }
  secsem(){
    this.api.getClass(this.teachid).subscribe((classes: any)=>{
      console.log(classes);
      this.classes = classes;
      this.classes = this.classes.filter((classes: { sem: any; }) => classes.sem === '2nd');
    })
  }

}
