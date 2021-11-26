import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  newpass:any;
  confirmpass:any;

  user_id:any;
  constructor(private api:ApiService) { 
    this.user_id = localStorage.getItem('id');
    // console.log(this.user_id);
  }

  ngOnInit(): void {
  }


  updateAdminPassword(){
    if(this.newpass!=this.confirmpass){
      alert("Password does not match");
    }else{
      const update_toast=document.getElementById('update_toast')!;
      update_toast.style.display="block";
      setTimeout(()=>{
        update_toast.style.display="none";
      },2000);

      let data={
        new_password:this.newpass

      }
      this.api.updateUserPassword(this.user_id,data).subscribe(res=>{
        console.log(res);
        
      })

    }

    this.newpass='';
    this.confirmpass='';

    
  }


}
