import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

import * as CryptoJS from 'crypto-js';
import { MatDialog } from '@angular/material/dialog';
import { FilterModalComponent } from '../filter-modal/filter-modal.component';


@Component({
  selector: 'app-subject-lists',
  templateUrl: './subject-lists.component.html',
  styleUrls: ['./subject-lists.component.scss']
})
export class SubjectListsComponent implements OnInit {

  subjects:any;

  code:any;
  secretKey="secretKey";
  id_encrypt:any;
  filterdata: any;


  constructor(public api:ApiService,public dialog: MatDialog) { 

    try {
      this.id_encrypt=localStorage.getItem('stud_id');
      // console.log(this.id_encrypt)


      let bits = CryptoJS.AES.decrypt(this.id_encrypt,this.secretKey);
      this.code = JSON.parse(bits.toString(CryptoJS.enc.Utf8))
      console.log(this.code);
      
    } catch (error) {
      console.log('subject-listerror')
      
    }
    

    

    

    this.getEnrolledSubj();
  }

  ngOnInit(): void {
  }

  getEnrolledSubj(){

    this.api.getEnrolledSubjects(this.code).subscribe((res:any)=> {
      console.log("Success===",res);
      
      this.subjects=res;
      console.log(this.subjects)
      // this.subjects.forEach((e: any) => {

      //   localStorage.setItem('secId',e.section_id)
      //   // console.log(e.section_id)
      // });

      
     

    },(error)=> {
      console.log("Error===",error);
    })
  }

  openModal(){
    let modal=this.dialog.open(FilterModalComponent);
    modal.afterClosed().subscribe(res=>{
      this.filterdata=res;
      console.log(this.filterdata)
      this.api.getEnrolledSubjects(this.code).subscribe((result:any)=> {
        // console.log("Success===",result);
        
        this.subjects=result;
        this.subjects=this.subjects.filter((e: { SY: any; })=>e.SY==this.filterdata)
        if(this.filterdata=="all"){
          this.getEnrolledSubj();
        }
        
        
  
        
       
  
      },(error)=> {
        console.log("Error===",error);
      })


    })

  }

}
