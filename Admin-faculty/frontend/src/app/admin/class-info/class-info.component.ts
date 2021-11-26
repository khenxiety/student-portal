import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-class-info',
  templateUrl: './class-info.component.html',
  styleUrls: ['./class-info.component.scss']
})
export class ClassInfoComponent implements OnInit {


  searchClass:any;

  info:any;
  teacher:any;
  student:any;

  studentsList:any;
  enrolledstudents:any;


  classid:any;

  strand:any;
  subjects:any;
  sy:any
  level:any;
  current_subject:any;

  select_semester:any;
  select_level:any
  select_subject:any;
  select_strand:any
  select_section:any
  select_schoolyear:any
  teachersData:any;

  isteacher:any
  constructor(public api:ApiService) { 
    this.getClassInfo();
  }

  ngOnInit(): void {
  }



  getClassInfo(){
    this.api.getClassInfo().subscribe((res:any)=> {
      // console.log("Success===",res);
      
      this.info=res;
      
      
     

    },(error)=> {
      console.log("Error===",error);
    })
  }
  search(){

    this.api.searchClass(this.searchClass).subscribe((res:any)=> {
      // console.log("Success===",res);
      
      this.info=res;
      
      
      
     

    },(error)=> {
      console.log("Error===",error);
    })
    if (this.searchClass=="") {
      this.getClassInfo();
    }
  }

  getIndividualTeacher(data: any,id:any,sub:any){
    this.current_subject=sub;
    // console.log(data);
    this.classid=id;
   
    this.isteacher=data;
    
    this.api.getIndividualTeacher(data).subscribe((res:any)=> {
      // console.log("Success===",res);
      
      this.teacher=res;
      
      
      
     

    },(error)=> {
      console.log("Error===",error);
    })
    this.api.getTeachersData().subscribe(
      data=>{
        // console.log(data);
        this.teachersData=data;
      }
    ),(error: any)=>{
      console.log(error);
    }

    
  }

  getIndividualStudent(data: any){
    
    
    this.api.getIndividualStudent(data).subscribe((res:any)=> {
      // console.log("Success===",res);
      
      this.student=res;
      
      
      
     

    },(error)=> {
      console.log("Error===",error);
    })
    
  }

  getStudentsList(data:any,sub:any){
    this.current_subject=sub;
    this.classid=data;
    // console.log(this.classid);
    this.api.getStudents().subscribe((res:any)=> {
      // console.log("Success===",res);
      
      this.studentsList=res;
      
      
      
     

    },(error)=> {
      console.log("Error===",error);
    })


    this.api.getEnrolledStudents(data).subscribe((res:any)=> {
      // console.log("Success===",res);
      
      this.enrolledstudents=res;
      
      
      
     

    },(error)=> {
      console.log("Error===",error);
    })
  }


  enrollToClass(id:any){

    
    let data={
      classid:this.classid,
      studid:id

    }
    
      
      
      this.api.enrollToClass(data).subscribe((res:any)=> {
          // console.log("Success===",res);
        console.log(this.enrolledstudents)
          
          
        this.getStudentsList(this.classid,this.current_subject);
          
          
          
         
    
      },(error)=> {
          console.log("Error===",error);
      })
      const add_toast=document.getElementById('add-toast')!;
      add_toast.style.display="block";
      setTimeout(()=>{
        add_toast.style.display="none";
      },2000);
      
      
    
    
    
    
    
  }
  deleteEnrolledStudent(id:any){
    
    
    this.api.deleteEnrolledStudent(id).subscribe((res:any)=> {
      // console.log("Success===",res);
      
      this.getStudentsList(this.classid,this.current_subject);
      
      
      
     

    },(error)=> {
      console.log("Error===",error);
    })

    const toast=document.getElementById('toaster')!;
    toast.style.display="block";
    setTimeout(()=>{
      toast.style.display="none";
    },2000);
  }






  getStrand(){
    this.api.getStrand().subscribe((res:any)=> {
      // console.log("Success===",res);
      
      this.strand=res;
      
      
      
     

    },(error)=> {
      console.log("Error===",error);
    })

    this.api.getSubjects().subscribe(
      (      data: any) => {
        // console.log(data);

        this.subjects = data;
      },
      (      error: any) => {
        console.log(error);
      }
    );
    
    this.api.getSY().subscribe(
      (      data: any) => {
        // console.log(data);

        this.sy = data;
      },
      (      error: any) => {
        console.log(error);
      }
    );
    this.api.getLevel().subscribe(
      (      data: any) => {
        // console.log(data);

        this.level = data;
      },
      (      error: any) => {
        console.log(error);
      }
    );
    



  }



  add_class(){
    console.log(this.select_semester,this.select_level,this.select_subject,this.select_strand,this.select_section,this.select_schoolyear);
    let data={
      semester:this.select_semester,
      level:this.select_level,
      subject:this.select_subject,
      strand:this.select_strand,
      section:this.select_section,
      schoolyear:this.select_schoolyear
    }
    this.api.addClass(data).subscribe((res:any)=> {
      // console.log("Success===",res);
      
      this.getClassInfo();
      
      
      
     

    }),(error:any)=> {
      console.log("Error===",error);
    }
    const add_toast=document.getElementById('add-toast')!;
    add_toast.style.display="block";
    setTimeout(()=>{
      add_toast.style.display="none";
    },2000);
    
  }
  deleteClass(id:any){
    this.api.deleteClass(id).subscribe((res:any)=> {
      // console.log("Success===",res);
      
      this.getClassInfo();
      
      
      
     

    },(error:any)=> {
      console.log("Error===",error);
    })
    const toast=document.getElementById('toaster')!;
    toast.style.display="block";
    setTimeout(()=>{
      toast.style.display="none";
    },2000);
  }

  assignTeacher(id:any){
    let data={
      teacherid:id,
    }
    // console.log(data,this.classid);
    this.api.assignTeacher(data,this.classid).subscribe((res:any)=> {
      // console.log("Success===",res);
      
      this.getClassInfo();
      this.getIndividualTeacher(data,id,this.current_subject);
      
      
      
     

    },(error:any)=> {
      console.log("Error===",error);
    })
    const toast=document.getElementById('add-toast')!;
    toast.style.display="block";
    setTimeout(()=>{
      toast.style.display="none";
    },2000);
  }


  




}
