import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  UserEitForm:any=FormGroup;
  submitted = false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.UserEitForm = this.formBuilder.group({
      fName  :['',Validators.required],
      lName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', Validators.required],
      verificationStatus : ['', Validators.required],
      walletCashbackAvailable :['',Validators.required],
      couponCode:['',Validators.required],
    
    
  }, {
      
  });
  }
  get f() { return this.UserEitForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.UserEitForm.invalid) {
          return;
      }

      // display form values on success
      console.log(this.UserEitForm.value);
  }

  onReset() {
      this.submitted = false;
      this.UserEitForm.reset();
  }

}
