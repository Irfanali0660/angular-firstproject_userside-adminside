import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { json } from 'express';
import { DatabaseApiServiceService } from 'src/app/service/database-api-service.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit{
  constructor (private service:DatabaseApiServiceService,private route:Router){}
  ngOnInit(): void {}
  Response:any;
 
  signup=new  FormGroup({
    'name':new FormControl(null),
    'email':new FormControl(null),
    'password':new FormControl(null),
    'repassword':new FormControl(null)
  })
  submitForm(){
    console.log(JSON.stringify(this.signup.value),'SignupFrom');
    const data=JSON.stringify(this.signup.value)
    this.service.SignupData(data).subscribe((data)=>{
      console.log(JSON.stringify(data)+"Response");
      if(data.failed){
        this.Response=data.failed;
      }else{
        localStorage.setItem('token',data.token.token)
        localStorage.setItem('tokenExp',data.token.exp)
        this.route.navigate(['/'])
      }
    })
  }
}
