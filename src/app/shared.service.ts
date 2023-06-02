import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "https://localhost:44373/api";
  constructor(private http:HttpClient) { }

  GetDesignation():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/designation');
  }

  GetEmployees(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employee');
  }

  Save(val:any){
    return this.http.post<any>(this.APIUrl+'/Employee',val);
 }

  Update(val:any){
    return this.http.put<any>(this.APIUrl+'/Employee', val);
  }

  DeleteEmployee(val:any){
    return this.http.delete<any>(this.APIUrl+'/Employee',val);
  }
}
