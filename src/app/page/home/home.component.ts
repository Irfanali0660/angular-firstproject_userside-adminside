import { NgIfContext } from '@angular/common';
import { Component,OnInit, TemplateRef } from '@angular/core';
import { DatabaseApiServiceService } from 'src/app/service/database-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  products:any;
  constructor(public service:DatabaseApiServiceService){}
  ngOnInit(): void {
      this.getproduct()
  }
  getproduct(){
    this.service.products().subscribe((data:any)=>{
      console.log(data); 
      this.products=data;      
    })
  }

}
