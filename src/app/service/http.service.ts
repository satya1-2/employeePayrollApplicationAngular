import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClinet:HttpClient) { }
  getEmployee():Observable<any>{
    //return this.httpClinet.get("localhost:8080/employee/all")

    return this.httpClinet.get('http://localhost:8080/employee/all');
  }
}
