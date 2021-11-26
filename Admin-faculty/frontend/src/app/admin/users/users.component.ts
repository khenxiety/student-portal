import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:any;



  new_password:any;
  confirmPassword:any;

  user_id:any;


  search_user:any
  constructor(private api:ApiService) { 
    this.getUsers();
  }

  ngOnInit(): void {
    
  }
  getUsers(){
    this.api.getUsers().subscribe(res=>{
      // console.log(res);
      this.users=res;
    })
  }



  getUserPassword(id:any){
    this.api.getUserPassword(id).subscribe(res=>{
      // console.log(res);
      this.user_id=id;
      console.log(this.user_id);
      this.getUsers();
    })
  }

  updateUserPassword(){
    if(this.new_password!=this.confirmPassword){
      alert("Password does not match");
    }else{
      const update_toast=document.getElementById('update_toast')!;
      update_toast.style.display="block";
      setTimeout(()=>{
        update_toast.style.display="none";
      },2000);

      let data={
        new_password:this.new_password

      }
      this.api.updateUserPassword(this.user_id,data).subscribe(res=>{
        // console.log(res);
        this.getUsers();
      })

    }
    this.new_password="";
    this.confirmPassword="";
    

  }
  deleteUser(id:any){
    const delete_toast=document.getElementById('delete_toast')!;
    delete_toast.style.display="block";
    setTimeout(()=>{
      delete_toast.style.display="none";
    },2000);

    this.api.deleteUser(id).subscribe(res=>{
      // console.log(res);
      this.getUsers();
    })
  }

  searchUser(){
    this.api.searchUser(this.search_user).subscribe(res=>{
      // console.log(res);
      this.users=res;
    })
    if(this.search_user==""){
      this.getUsers();
    }



  }


  

}
