import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-advisories',
  templateUrl: './student-advisories.component.html',
  styleUrls: ['./student-advisories.component.scss']
})
export class StudentAdvisoriesComponent implements OnInit {

  num1:any;
  num2:any;

  num3:any;
  avg:any;

  constructor() { }

  ngOnInit(): void {
    const sec = window.document.getElementById("two")!;
    sec.style.backgroundColor="#e0e0e059";
    // this.increment();

  }

  increment(){
    this.avg=this.num1+this.num2+this.num3;


  }
  toggleleft(){
    const a = window.document.getElementById('navbarToggleExternalContent')!;
    a.classList.toggle("toleft");
    setTimeout(() => {
      a.style.display="none"
    }, 200);
    
  }
  toggleright(){
    const a = window.document.getElementById('navbarToggleExternalContent')!;
    a.classList.toggle("toright");
    setTimeout(() => {
      a.style.display="block"
    }, 200);
    
  }

}
