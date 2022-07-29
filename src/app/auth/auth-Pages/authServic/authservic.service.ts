import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthservicService {

  constructor(public http: HttpClient) {
    console.log("Service Active")
   }
   postLogIn(data: any) {


    console.log(data)
    return this.http.post(`${environment.apiBaseUrl}${environment.apiPath}login`, data).pipe(map(res => <any>res));
    // return this.http.post<any>('http://3.111.168.156:5000/api/v1/adminRouter/login',data);
  }

  
  register(data:any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return  this.http.post(`${environment.apiBaseUrl}${environment.apiPath}register`, data).pipe(map(res => <any>res));
  }

}
