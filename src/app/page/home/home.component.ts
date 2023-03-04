import { Component,OnInit } from '@angular/core';
import { DatabaseApiServiceService } from 'src/app/service/database-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  products:any;
  constructor(private service:DatabaseApiServiceService){}
  ngOnInit(): void {
      this.getproduct()
  }
  getproduct(){
    this.service.products().subscribe((data)=>{
      console.log(data); 
      this.products=data; 
    })
  }
}
