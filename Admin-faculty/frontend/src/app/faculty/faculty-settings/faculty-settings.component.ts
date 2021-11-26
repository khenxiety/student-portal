import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-faculty-settings',
  templateUrl: './faculty-settings.component.html',
  styleUrls: ['./faculty-settings.component.scss']
})
export class FacultySettingsComponent implements OnInit {

  id:any
  pass:any
  cpass:any
  constructor(private api:ApiService) { 
    this.id=localStorage.getItem('id')
    console.log(this.id)
  }

  ngOnInit(): void {
  }

  updatePass(){
    let data={
      new_password:this.cpass,
    }
    if(this.pass==this.cpass){
      this.api.updateUserPassword(this.id,data).subscribe(
        data=>{
          console.log(data)
        }
      )
      const update_toast=document.getElementById('update')!;
      update_toast.style.display='block';
      setTimeout(() => {
        update_toast.style.display='none';
        
      }, 2000);


      
    }else{
      alert('Password not matched')
    }
    this.pass=''
    this.cpass=''
    
  }

}
