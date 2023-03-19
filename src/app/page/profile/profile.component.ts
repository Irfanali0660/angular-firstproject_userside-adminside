import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { json } from 'express';
import { DatabaseApiServiceService } from 'src/app/service/database-api-service.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  response:any;
  data:any;
  constructor(private service:DatabaseApiServiceService){ }
  ngOnInit(): void { 
    this.userData()
   }
   profile=new  FormGroup({
    'username':new FormControl(null),
    'email':new FormControl(null),
    'phone':new FormControl(null)
  })
  formsumbit(){
    const data=JSON.stringify(this.profile.value)
    console.log(data);
    this.service.profileData(data).subscribe((data:any)=>{
      if(data.failed){
        this.response=data;
      }else{
        console.log(data);
        this.data=data
        this.service.logincheck()
      }
    })
  }
   userData():any{
    if(localStorage.getItem('token')){
     this.service.logincheck().subscribe((userdata)=>{
      console.log(JSON.stringify(userdata)+"USER++++++++++++++++=");
      this.user=userdata.user
     })
    }else{
      this.user=null
      return false;
    }
  }
  uploadProfile(event:any){
    const formData = new FormData();
    formData.append('avatar', event.target.files[0]);
    console.log(formData);
    this.service.imageadd(formData).subscribe((data)=>{
     if(data.message){
      this.response=data
     }
     else{
      this.data=data;
      this.userData();
     }
    })
  }
 

}
