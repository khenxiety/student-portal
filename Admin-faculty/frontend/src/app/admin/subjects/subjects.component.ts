import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {


  subjects:any;

  subjectCode:any;
  subjectTitle:any;
  subjectType:any;
  indivsubjects: any;
  id: any;
  search: any;
  constructor(public api:ApiService) { 
    this.getSubjects();
  }

  ngOnInit(): void {
  }



  getSubjects() {
    this.api.getSubjects().subscribe(
      (      data: any) => {
        // console.log(data);

        this.subjects = data;
      },
      (      error: any) => {
        console.log(error);
      }
    );
  }

  addSubject() {
    let datas = {
      subjCode: this.subjectCode,
      subjTitle: this.subjectTitle,
      subjType: this.subjectType,

    }
    
    this.api.addSubject(datas).subscribe((res:any)=> {
      // console.log("Success===",res);
      
      this.getSubjects();
      
    },(error)=> {
      console.log("Error===",error);
    })
    const toast = document.getElementById('add_toast')!;
    toast.style.display = 'block';
    setTimeout(() => {
      toast.style.display = 'none';
    }
    , 2000);
  }


  deleteSubject(id: any) {
    this.api.deleteSubject(id).subscribe((res:any)=> {
      // console.log("Success===",res);
      
      this.getSubjects();
      
    },(error)=> {
      console.log("Error===",error);
    })
    const toast = document.getElementById('delete_toast')!;
    toast.style.display = 'block';
    setTimeout(() => {
      toast.style.display = 'none';
    }
    , 2000);
  }
  getSingleSubject(id:any){
    this.id=id
    this.api.getSingleSubject(id).subscribe((res:any)=> {
      // console.log("Success===",res);
      this.indivsubjects = res;
      
      
      this.indivsubjects.forEach((element: any) => {
        this.subjectCode = element.code;
        this.subjectTitle = element.title;
        this.subjectType = element.unit;
      });
      
    }),(error:any)=> {
      console.log("Error===",error);
    }
  }
  reset(){
    this.subjectCode = '';
    this.subjectTitle = '';
    this.subjectType = '';
  }

  updateSubject(){
    let datas = {
      subjCode: this.subjectCode,
      subjTitle: this.subjectTitle,
      subjType: this.subjectType,

    }
    
    this.api.updateSubject(this.id,datas).subscribe((res:any)=> {
      // console.log("Success===",res);
      
      this.getSubjects();
      
    },(error)=> {
      console.log("Error===",error);
    })
    const toast = document.getElementById('updatetoast')!;
    toast.style.display = 'block';
    setTimeout(() => {
      toast.style.display = 'none';
    }
    , 2000);
    

  }

  searchSubject(){
    this.api.searchSubject(this.search).subscribe((res:any)=> {
      // console.log("Success===",res);
      
      this.subjects = res;
      
    },(error)=> {
      console.log("Error===",error);
    })
    if(this.search == ''){
      this.getSubjects();
    }

  }



}



