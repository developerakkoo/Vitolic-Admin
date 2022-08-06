import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
import {product} from '../product/productlistmodule'
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  PostProduct(request: { title: any; price: any; discountedPrice: any; inStock: any; category: any; stock: any; units: any; }) {
    throw new Error('Method not implemented.');
  }
  // token: any = localStorage.getItem('authtoken');

  constructor(private http: HttpClient) { }

  ProductList() {
    let  url = "http://54.159.158.232/products";
    return this.http.get(url);
  }

  ProductPost(data:any){
    return this.http.post<any>("http://54.159.158.232/products",data)
    .pipe(map((status:any)=>{
      return status;
    }))
  }

  OrderList() {
let url ="http://54.159.158.232/order";
return this.http.get(url);
  }

  UserList() {
		let url =" http://54.159.158.232/user/profiles";
		return this.http.get(url);
	}


  // UserList() {
  //   let url ="http://54.159.158.232/user/profiles";
  //   return this.http.get(url);}
  
  
  // deleteCourse(id:any) {
  //   let headers:any = new HttpHeaders(
  //     {
  //      "content-Type":"application/json",
  //      Authorization:this.token,
  //     }
  //   );
  //   return this.http.delete(`${environment.apiBaseUrl}${environment.apiPath}deleteCourse/?course_id=${id}`,{headers}).pipe(map((res) => <any>res));
  // }
  // courseListById(id: any) {
  //   let headers: any = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     Authorization: this.token,
  //   });
  //   return this.http
  //     .get(
  //       `${environment.apiBaseUrl}${environment.apiPath}courseListById/${id}`,
  //       { headers }
  //     )
  //     .pipe(map((res) => <any>res));
  // }

  // editCourse(payload: any, id: any) {
  //   let headers: any = new HttpHeaders({
  //     'content-Type': 'application/json',
  //     Authorization: this.token,
  //   });
  //   return this.http
  //     .put(
  //       `${environment.apiBaseUrl}${environment.apiPath}editCourse/${id}`,
  //       payload,
  //       { headers }
  //     )
  //     .pipe(map((res) => <any>res));
  // }

  // updateAdminProfile(data: any) {
  //   let headers: any = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     Authorization: this.token,
  //   });
  //   return this.http
  //     .put(
  //       `${environment.apiBaseUrl}${environment.apiPath}updateAdminProfile`,
  //       data,
  //       { headers }
  //     )
  //     .pipe(map((res) => <any>res));
  // }

  // uploadFile(file: any) {
  //   const fileData: FormData = new FormData();
  //   fileData.append('files', file);

  //   return this.http
  //     .post(`${environment.apiBaseUrl}${environment.s3}upload`, fileData)
  //     .pipe(map((res) => <any>res));
  // }

  // CourseModuleList() {
  //   let headers: any = new HttpHeaders({
  //     'content-Type': 'application/json',
  //     Authorization: this.token,
  //   });
  //   return this.http
  //     .get(`${environment.apiBaseUrl}${environment.apiPath}CourseModuleList`, {
  //       headers,
  //     })
  //     .pipe(map((res) => <any>res));
  // }
  // addCourseModule(payload:any) {
  //   let headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     Authorization: this.token,
  //   });
  //   return this.http
  //     .post(`${environment.apiBaseUrl}${environment.apiPath}addCourseModule`, payload, {
  //       headers,
  //     })
  //     .pipe(map((res) => <any>res));
  // }
  // deleteCourseModule(id:any) {
  //   let headers:any = new HttpHeaders(
  //     {
  //      "content-Type":"application/json",
  //      Authorization:this.token,
  //     }
  //   );
  //   return this.http.delete(`${environment.apiBaseUrl}${environment.apiPath}deleteCourseModule/?courseModule_id=${id}`,{headers}).pipe(map((res) => <any>res));
  // }
  // courseModuleListById(id: any) {
  //   let headers: any = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     Authorization: this.token,
  //   });
  //   return this.http
  //     .get(
  //       `${environment.apiBaseUrl}${environment.apiPath}courseModuleListById/${id}`,
  //       { headers }
  //     )
  //     .pipe(map((res) => <any>res));
  // }

  // editCourseModule(payload: any, id: any) {
  //   let headers: any = new HttpHeaders({
  //     'content-Type': 'application/json',
  //     Authorization: this.token,
  //   });
  //   return this.http
  //     .put(
  //       `${environment.apiBaseUrl}${environment.apiPath}editCourseModule/${id}`,
  //       payload,
  //       { headers }
  //     )
  //     .pipe(map((res) => <any>res));
  // }
  // merchantList(){
  //   let headers:any = new HttpHeaders({
  //     'content-Type':'applicatin/json',
  //     Authorization: this.token,
  //   })
  //   return this.http.get(`${environment.apiBaseUrl}${environment.apiPath}merchantList`,{
  //     headers,
  //     })
  //     .pipe(map((res) => <any>res));
  // }
  
  // addMerchant(payload:any) {
  //   let headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     Authorization: this.token,
  //   });
  //   return this.http
  //     .post(`${environment.apiBaseUrl}${environment.apiPath}addMerchant`, payload, {
  //       headers,
  //     })
  //     .pipe(map((res) => <any>res));
  // }
  // merchantListById(id: any) {
  //   let headers: any = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     Authorization: this.token,
      
  //   });
  //   return this.http
  //     .get(
  //       `${environment.apiBaseUrl}${environment.apiPath}merchantListById/${id}`,
  //       { headers }
  //     )
  //     .pipe(map((res) => <any>res));
  // }

  // editMerchant(payload: any, id: any) {
  //   let headers: any = new HttpHeaders({
  //     'content-Type': 'application/json',
  //     Authorization: this.token,
  //   });
  //   return this.http
  //     .put(
  //       `${environment.apiBaseUrl}${environment.apiPath}editMerchant/${id}`,
  //       payload,
  //       { headers }
  //     )
  //     .pipe(map((res) => <any>res));
  // }
  // subAdminList() {
  //   console.log('Working');
  //   let headers: any = new HttpHeaders({
  //     'content-Type': 'application/json',
  //     Authorization: this.token,
  //   });
  //   console.log(headers);
  //   return this.http
  //     .post(
  //       `${environment.apiBaseUrl}${environment.apiPath}subAdminList`,
  //       {},
  //       { headers }
  //     )
  //     .pipe(map((res) => <any>res));
  // }

}
