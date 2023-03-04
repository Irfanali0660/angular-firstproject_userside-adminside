import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DatabaseApiServiceService {

  
  private httpOptions = {
    headers: new HttpHeaders({
      'content-Type':'application/json' 
    })
  }

  constructor( private http:HttpClient ) { }

  localhost='http://localhost:4000'

  SignupData(data:any) :Observable<any>{
    console.log(data);
    return this.http.post(`${this.localhost}/users/signup`,data,this.httpOptions)
  }
  loginData(data:any) :Observable<any>{
    console.log(data);
    return this.http.post(`${this.localhost}/users/login`,data,this.httpOptions)
  }
  products(){
    return this.http.post(`${this.localhost}/users/products`,this.httpOptions)
  }
}
