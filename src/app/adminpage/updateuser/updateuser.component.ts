import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DatabaseApiServiceService } from 'src/app/service/database-api-service.service';
import  Swal  from "sweetalert2";


@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit{
user:any;
response:any;
data:any;
constructor(private service:DatabaseApiServiceService,private router:ActivatedRoute){
}
ngOnInit(): void {
  this.userData()
}
UserID = this.router.snapshot.paramMap.get('id') 

updateuser=new FormGroup({
  'id':new FormControl(null),
  'username':new FormControl(null),
  'email':new FormControl(null),
  'phone':new FormControl(null)
})
block=new FormGroup({
  'id':new FormControl(null),
})

userData():void{
   this.service.singleuser(this.UserID).subscribe((userdetails:string)=>{ 
    console.log(JSON.stringify(userdetails)+"adminUSE+++++++++++=");
    this.user=userdetails
   })
}

formsumbit(){
  const data=JSON.stringify(this.updateuser.value)
  console.log(data);
  this.service.updateuser(data).subscribe((data:any)=>{
    console.log(data+"FORM+++++++++++++++");
    if(data.failed){
      this.response=data;
      setTimeout(() => {
        this.response=null
      }, 3000);
    }else{
      console.log(data);
      this.data=data
      this.userData()
      setTimeout(() => {
        this.data=null
      }, 3000);
    }
  })
}
blockuser(){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes'
  }).then((result:any) => {
    if (result.isConfirmed) {
      const data=JSON.stringify(this.block.value)
      console.log(data);
      this.service.blockuser(data).subscribe((data:string)=>{
         this.userData()
      })
    }
  }) 

}


}
