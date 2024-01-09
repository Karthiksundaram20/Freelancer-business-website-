import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const BASIC_URL=["http://localhost:8080/"]
@Injectable({
  providedIn: 'root'
})
export class DeveloperServiceService {

  constructor(private http :HttpClient) { }

  postEmployee(employee:any):Observable<any>{

    return this.http.post(BASIC_URL+"employee/add",employee);
  }
  getAllEmployee(){
    return this.http.get(BASIC_URL+"employee/all");   
  }

  deleteEmployee(id:any):Observable<any>{
    return this.http.delete(BASIC_URL+"employee/del/"+id);
  }

  getEmployeeById(id:number):Observable<any>{
    return this.http.get(BASIC_URL+"employee/"+id);
  }
  
  updateEmployee(id:number,employee:any): Observable<any>{
    return this.http.put(BASIC_URL+"employee/"+id,employee);
  }

  register(signupRequest:any):Observable<any>{
    return this.http.post(BASIC_URL+"signup",signupRequest);
  }

  login(loginRequest:any):Observable<any>{
    return this.http.post(BASIC_URL+"login",loginRequest);
  }
}
