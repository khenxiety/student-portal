import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculty-header',
  templateUrl: './faculty-header.component.html',
  styleUrls: ['./faculty-header.component.scss']
})
export class FacultyHeaderComponent implements OnInit {


  name:any;
  constructor(private router:Router) { 
    this.name = localStorage.getItem('name');

    // console.log(localStorage.getItem('id'));
    
  }

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['']);

  }

}
