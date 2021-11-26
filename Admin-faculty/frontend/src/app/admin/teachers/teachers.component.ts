import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  teachersData:any;



  teacherid:any;
  fname:any;
  lname:any;
  email:any;
  phone:any;
  search: any;
  indivteacher: any;
  id: any;
  constructor(private api:ApiService) {
    this.getTeachersData();
  }
   

  ngOnInit(): void {
  }
  getTeachersData(){
    this.api.getTeachersData().subscribe(
      data=>{
        // console.log(data);
        this.teachersData=data;
      }
    ),(error: any)=>{
      console.log(error);
    }
  }

  addTeacher(){
    if(this.teacherid==undefined || this.teacherid==''){
      alert('Please enter teacher id');
    }else if(this.fname==undefined || this.fname==''){
      alert('Please enter first name');
    }else if(this.lname==undefined || this.lname==''){
      alert('Please enter last name');
    }else if(this.email==undefined || this.email==''){
      alert('Please enter email');
    }else if(this.phone==undefined || this.phone==''){
      alert('Please enter phone');
    }else{
      const teacher={
        teacherid:this.teacherid,
        fname:this.fname,
        lname:this.lname,
        email:this.email,
        phone:this.phone,
        level:"teacher"
      }
      this.api.addTeacher(teacher).subscribe(
        data=>{
          // console.log(data);
          this.getTeachersData();
        }
      ),(error: any)=>{
        console.log(error);
      }
      this.api.addUserData(teacher).subscribe(
        data=>{
          // console.log(data);
          
        }
      ),(error: any)=>{
        console.log(error);
      }
      const toast = document.getElementById('addtoast')!;
      toast.style.display = 'block';
      setTimeout(() => {
        toast.style.display = 'none';
      }, 2000);
    }
  }
  deleteTeacher(id:any){
    this.api.deleteTeacher(id).subscribe(
      data=>{
        // console.log(data);
        this.getTeachersData();
      }
    ),(error: any)=>{
      console.log(error);
    }
    const toast = document.getElementById('deletetoast')!;
    toast.style.display = 'block';
    setTimeout(() => {
      toast.style.display = 'none';
    }, 2000);
  }
  getIndividualTeacher(id:any){

    this.id=id;
    
    
    this.api.getIndividualTeacher(id).subscribe((res:any)=> {
      // console.log("Success===",res);
      
      this.indivteacher=res;
      this.indivteacher.forEach((element: any) => {

        this.teacherid=element.teachid;
        this.fname=element.fname;
        this.lname=element.lname;
        this.email=element.email;
        this.phone=element.phone;
        
        
      });
      
      
      
     

    },(error)=> {
      console.log("Error===",error);
    })
    

    
  }
  updateTeacher(){
    if(this.teacherid==undefined || this.teacherid==''){
      alert('Please enter teacher id');
    }else if(this.fname==undefined || this.fname==''){
      alert('Please enter first name');
    }else if(this.lname==undefined || this.lname==''){
      alert('Please enter last name');
    }else if(this.email==undefined || this.email==''){
      alert('Please enter email');
    }else if(this.phone==undefined || this.phone==''){
      alert('Please enter phone');
    }else{
      const teacher={
        teacherid:this.teacherid,
        fname:this.fname,
        lname:this.lname,
        email:this.email,
        phone:this.phone,
        
      }
      this.api.updateTeacher(this.id,teacher).subscribe(
        data=>{
          // console.log(data);
          this.getTeachersData();
        }
      ),(error: any)=>{
        console.log(error);
      }
      const toast = document.getElementById('updatetoast')!;
      toast.style.display = 'block';
      setTimeout(() => {
        toast.style.display = 'none';
      }, 2000);
    }

  }
  

  searchTeacher(){
    this.api.searchTeacher(this.search).subscribe((res:any)=> {
      // console.log("Success===",res);
      this.teachersData=res;
      
      
      
    },(error)=> {
      console.log("Error===",error);
    })
    if(this.search == ''){
      this.getTeachersData();
      
    }
  }
}
