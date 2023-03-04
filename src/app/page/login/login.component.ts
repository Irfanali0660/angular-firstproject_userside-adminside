import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { DatabaseApiServiceService } from 'src/app/service/database-api-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor (private service:DatabaseApiServiceService,private route:Router){}
ngOnInit(): void {}

data={ 
email:'',
password:''
}
Response:any;

submit() {
  console.log(JSON.stringify(this.data)); 
    const data=JSON.stringify(this.data)
    this.service.loginData(data).subscribe((data)=>{
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
