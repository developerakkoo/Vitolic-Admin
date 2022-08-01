import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  UserProfileForm:any= FormGroup;
    submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.UserProfileForm = this.formBuilder.group({
      fName  :['',Validators.required],
      lName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', Validators.required],
      verificationStatus : ['', Validators.required],
      walletCashbackAvailable :['',Validators.required],
      couponCode:['',Validators.required],
    
     
  }, {
      // validator: MustMatch('password', 'confirmPassword')
  });
  }
  get f() { return this.UserProfileForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.UserProfileForm.invalid) {
          return;
      }

      // display form values on success
      console.log(this.UserProfileForm.value);
  }

  onReset() {
      this.submitted = false;
      this.UserProfileForm.reset();
  }

}
