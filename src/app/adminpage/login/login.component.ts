import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseApiServiceService } from 'src/app/service/database-api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class adminLoginComponent implements OnInit{

  constructor(private service:DatabaseApiServiceService,private route:Router){}

  ngOnInit(): void { }

  data={ 
    email:'',
    password:''
    }
    Response:any;
    adsubmit() {
      console.log(JSON.stringify(this.data)); 
        const data=JSON.stringify(this.data)
        this.service.adminlogin(data).subscribe((data)=>{
          console.log(JSON.stringify(data)+"Response");
          if(data.failed){
            this.Response=data.failed;
            setTimeout(() => {
              this.Response=null;
            }, 5000);
          }else{
            localStorage.setItem('adtoken',data.token.token)
            localStorage.setItem('adtokenExp',data.token.exp)
            this.route.navigate(['admin/home'])
          }
        })
    }

}
