import { Component,OnInit } from '@angular/core';
import { DatabaseApiServiceService } from 'src/app/service/database-api-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  constructor(public service:DatabaseApiServiceService){}

  user:any;
  ngOnInit(): void {
    this.apilogincheck()
  }
  logout(){
    localStorage.clear()
    this.apilogincheck()
  }
  apilogincheck():any{
    if(localStorage.getItem('token')){
     this.service.logincheck().subscribe((userdata)=>{
      this.user=userdata.user
     })
    }else{
      this.user=null
      return false;
    }
  }
}
