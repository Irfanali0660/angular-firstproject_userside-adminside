import { Component ,OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DatabaseApiServiceService } from 'src/app/service/database-api-service.service';
import  Swal  from "sweetalert2";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  user:any;
  response:any;
  constructor(private service:DatabaseApiServiceService ){}
  ngOnInit(): void {
    this.users()
  }
  search=new FormGroup({
    'search':new FormControl(null),
  })

  users(){
    this.service.userData().subscribe((data:any)=>{
      console.log(data); 
      this.user=data;      
    })
  }
 
deleteuser(data:string){

  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result:any) => {
    if (result.isConfirmed) {
      this.service.deleteuser(data).subscribe((data:string)=>{
        console.log(data); 
        this.user=data;   
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        ) 
        this.users()  
      }) 
    }
  }) 
}

searchuser(){
  const data=JSON.stringify(this.search.value)
  console.log(data);
  this.service.searchuser(data).subscribe((data:any)=>{
    console.log(data.length);
    if(data.length==0){
      this.response="No user found"
      this.user=data;
      setTimeout(() => {
        this.user=null
        this.response=null
      }, 5000);
    }else{
      this.user=data;
    }
  })
}
}
