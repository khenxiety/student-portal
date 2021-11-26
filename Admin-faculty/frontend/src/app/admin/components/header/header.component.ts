import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: any;
  constructor(private router:Router) { 
    this.user = localStorage.getItem('user');
    // console.log(this.user);

    
  }

  ngOnInit(): void {
    if(this.user == null){
      this.router.navigate(['/err']);
    }
  }



  logout(){
    localStorage.removeItem('user');
    this.user = null;
    this.router.navigate(['']);

  }

}
