import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css']
})
export class SlidebarComponent implements OnInit{


  constructor(private route :Router){}
  ngOnInit(): void {
    
  }
  adminlogout(){
      localStorage.clear()
      this.route.navigate(['/adminlogin'])
  }
}
