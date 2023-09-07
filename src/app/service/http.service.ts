import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  

  constructor(private httpClinet:HttpClient) { }
  //  baseUrl = 'http://localhost:8080/employee';
  getEmployee():Observable<any>{
    //return this.httpClinet.get("localhost:8080/employee/all")

    return this.httpClinet.get('http://localhost:8080/employee/all');
  }

  addEmployee( body: any): Observable<any> {
    return this.httpClinet.post('http://localhost:8080/employee/add', body);
  }
  getEmployeeById( id: number): Observable<any> {
    return this.httpClinet.get('http://localhost:8080/employee/get/'+ id);
  }
    
  updateEmployee(id:number,body:any):Observable<any>{
    return this.httpClinet.put('http://localhost:8080/employee/update/'+id,body)
  }

  removeEmployee(id:number):Observable<any>{
    return this.httpClinet.delete('http://localhost:8080/employee/delete/'+id)
  }
}
