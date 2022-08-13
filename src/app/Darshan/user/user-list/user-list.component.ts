import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ServiceService } from '../../service/service.service'
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  UserEitForm:any=FormGroup;
  submitted = false;
  list: any;
  User: any;

  constructor(private formBuilder:FormBuilder,private http: HttpClient,
    private api:ServiceService) { }

  ngOnInit(): void {
    this.api.UserList()
    .subscribe((status:any) =>{
      console.log(status)
      this.list = status['user/profiles'];
    });



    this.UserEitForm = this.formBuilder.group({
      fName  :['',Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', Validators.required],
      verificationStatus : ['', Validators.required],
      walletCashbackAvailable :['',Validators.required],
      couponCode:['',Validators.required],
    
    
  }, {
      
  });
  
  }
  


  edit(item:any){
    console.log(item);
    this.User = item;
    this.UserEitForm.get('fName').setValue(item.fName);    
    this.UserEitForm.get('lastName').setValue(item.lName); 
    this.UserEitForm.get('email').setValue(item.email); 
    this.UserEitForm.get('contactNumber').setValue(item.contactNumber);
    this.UserEitForm.get('verificationStatus').setValue(item.verificationStatus);
    this.UserEitForm.get('walletCashbackAvailable').setValue(item.walletCashbackAvailable );
    this.UserEitForm.get('couponCode').setValue(item.couponCode);
    // this.productForm.get('file ').setValue(item.imageUrl);
  }

 

  delete(itemid:any){
    console.log(itemid);
    
    this.http.delete(environment.apiBaseUrl + '/user/profiles' + itemid)
    .subscribe((response:any) => {
      console.log(response);
      
    },(error:any) => {
      console.log(error);
      
    })
  }
  get f() { return this.UserEitForm.controls; }

  onSubmit() {
      this.submitted =false;

      // stop here if form is invalid
      // if (this.UserEitForm.invalid) {
      //     return;
      // }

      // display form values on success
      console.log(this.UserEitForm.value);
  }

  onReset() {
      this.submitted = false;
      this.UserEitForm.reset();
  }

}
