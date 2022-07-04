import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';

import { environment } from 'src/environments/environment';

// import { environment } from '../../environments/environment';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http: HttpClient) { }


  postLogIn(data: any) {


    console.log(data)
    return this.http.post(`${environment.apiBaseUrl}${environment.apiPath}login`, data).pipe(map(res => <any>res));
    // return this.http.post<any>('http://3.111.168.156:5000/api/v1/adminRouter/login',data);
  }



  postforgot(data: any) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(`${environment.apiBaseUrl}${environment.apiPath}forgotpasswordotps`, data, { headers }).pipe(map(res => <any>res));
  }

  registerSubAdmin(data:any){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return  this.http.post(`${environment.apiBaseUrl}${environment.apiPath}registerSubAdmin`, data).pipe(map(res => <any>res));
  }


}
