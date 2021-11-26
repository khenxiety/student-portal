import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { NavparamsService } from 'src/app/services/navparams.service';


import * as CryptoJS from 'crypto-js';



@Component({
  selector: 'app-student-dash',
  templateUrl: './student-dash.component.html',
  styleUrls: ['./student-dash.component.scss']
})
export class StudentDashComponent implements OnInit {

  

  name:any;
  id:any;
  code:any;
  info:any;
  reg_info:any;
  school_year_filter:any;
  semester_filter:any;

  secretKey="secretKey"

  id_encrypted:any;


  options=[
    {
      value:'2020-2021',
      year:'2020-2021'
    },
    {
      value:'2021-2022',
      year:'2021-2022'
    },
    {
      value:'2022-2023',
      year:'2022-2023'
    }
  ]
  
  

  constructor(private navparams: NavparamsService, private api:ApiService ,public router:Router) {
    // this.name=this.navparams.getName();
    // this.id=this.navparams.getStudentid();
    try {
      this.id_encrypted=localStorage.getItem('code');


      let bits = CryptoJS.AES.decrypt(this.id_encrypted,this.secretKey);
      this.code = JSON.parse(bits.toString(CryptoJS.enc.Utf8))
      console.log(this.code);
      
    } catch (error) {
      console.log("hahha")
      this.router.navigate(['error']);
      
    }
   
    
    
    
    this.getStudentInformation();
    

    



  }

  ngOnInit(): void {
    // const portal_tab=document.getElementById('portal_tab')!;
    // portal_tab.classList.add('active');



    



    // if(this.code==null || this.code==undefined){
    //   this.router.navigate(['error']);
    // }

    
    
  }


  

  getStudentInformation(){
    this.api.getStudentInfo(this.code).subscribe((res:any)=> {
      console.log("Success===",res);
      
      this.info=res;
      console.log(this.info)
      
      
      this.info.forEach((e: any) => {
        
        let id_encrypted=CryptoJS.AES.encrypt(JSON.stringify(e.id),this.secretKey).toString();
        
        localStorage.setItem('stud_id',id_encrypted)
        // console.log(id_encrypted)
      })
     

    },(error)=> {
      console.log("Error===",error);
    })
    // this.api.getStudentRegistration(this.code).subscribe((res:any)=> {
    //   console.log("Success===",res);
      
    //   this.reg_info=res;
      
      
      
    
     

    // },(error)=> {
    //   console.log("Error===",error);
    // })
    

  }

  filter(){
    console.log(this.school_year_filter);
    console.log(this.semester_filter);

  }
  


}
