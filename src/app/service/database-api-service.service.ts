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
  user:any;
  constructor( private http:HttpClient ) { }

  localhost='http://localhost:4000'

  SignupData(data:any) :Observable<any>{
    return this.http.post(`${this.localhost}/users/signup`,data,this.httpOptions)
  }
  loginData(data:any) :Observable<any>{
    return this.http.post(`${this.localhost}/users/login`,data,this.httpOptions)
  }
  products():Observable<any>{
    return this.http.post(`${this.localhost}/users/products`,this.httpOptions)
  }
  logincheck():Observable<any>{
      return this.http.post(`${this.localhost}/users/usercheck`,this.httpOptions)
  }
  profileData(data:any):Observable<any>{
    return this.http.post(`${this.localhost}/users/profile`,data,this.httpOptions)
  }
  imageadd(data:any):Observable<any>{
    return this.http.post(`${this.localhost}/users/imageadd`,data)
  }



  adminlogin(data:any):Observable<any>{
    return this.http.post(`${this.localhost}/admin/login`,data,this.httpOptions)
  }
  userData():Observable<any>{
    return this.http.post(`${this.localhost}/admin/users`,this.httpOptions)
  }
  deleteuser(data:any):Observable<any>{
    return this.http.get(`${this.localhost}/admin/deleteuser/${data}`,this.httpOptions)
  }
  singleuser(data:any):Observable<any>{
    return this.http.get(`${this.localhost}/admin/singleuser/${data}`,this.httpOptions)
  }
  updateuser(data:any):Observable<any>{
    return this.http.put(`${this.localhost}/admin/updateuser`,data,this.httpOptions)
  }
  blockuser(data:any):Observable<any>{
    return this.http.put(`${this.localhost}/admin/block`,data,this.httpOptions) 
  }
  searchuser(data:any):Observable<any>{
    return this.http.post(`${this.localhost}/admin/searchuser`,data,this.httpOptions) 
  }
}
