import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  code:any
  password:any


  accounts:any;

  constructor(private api:ApiService,private router:Router) { 
    this.getAccount()
   }

  ngOnInit(): void {
  }

  getAccount(){
    this.api.getAccount().subscribe(res=>{
      
      this.accounts = res;
      console.log(this.accounts)
    }),((err: any)=>{
      console.log(err)
    })
    
  }

  login(){
    this.accounts.forEach((e: any) => {
      
      if(e.username == this.code && e.password == this.password){
        console.log('success')
        localStorage.setItem('user',e.username)
        localStorage.setItem('id',e.id)
        localStorage.setItem('name',e.fname)

        if(e.level == 'admin'){
          this.router.navigate(['admin-dash'])
        
        }else if(e.level == 'teacher'){
          this.router.navigate(['faculty-dash'])
        }

        
        const alert_success=document.getElementById('alert_success')!;
        alert_success.style.display='flex'
        setTimeout(()=>{
          alert_success.style.display='none'
        },2000)
        
      

      } else if(e.username != this.code && e.password != this.password) {
        console.log('wrong')
        const alert_wrong=document.getElementById('alert_failed')!;
        alert_wrong.style.display='flex'
        setTimeout(()=>{
          alert_wrong.style.display='none'
        }
        ,2000)
      }
    })

  }
}
