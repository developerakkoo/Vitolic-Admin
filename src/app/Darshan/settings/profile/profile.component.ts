import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppService } from './../../../app.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  registerForm: any = FormGroup;
  changePasswordForm: any = FormGroup;
  submitted = false;
  changeSubmitted = false;
  fieldNewPass: boolean = false;
  fieldconPass: boolean = false;
  ngxService: any;

  imageUrl: any = '../../../../assets/images/userPrfl.png';

  adminUploadProfilePayload: any = {
    profile_image: '',
    full_name: '',
    country: '',
    address: '',
  };

  constructor(
    private formBuilder: FormBuilder,
    private _snackbar: MatSnackBar,
    
    private router: Router,
    private rootService: AppService
  ) {
    if (localStorage.getItem('token')) {
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      full_name: ['', Validators.required],
      mobile_number: [
        '',
        [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      ],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      address: ['', Validators.required],
    });
    this.changePasswordForm = this.formBuilder.group(
      {
        new_password: ['', [Validators.required, Validators.minLength(6)]],
        confirm_password: ['', [Validators.required, Validators.minLength(6)]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      },
      {}
    );

    this.registerForm.controls['mobile_number'].disable();
    this.registerForm.controls['email'].disable();

    this.loadProfile();
  }
  get f() {
    return this.registerForm.controls;
  }
  get c() {
    return this.changePasswordForm.controls;
  }

  async loadProfile() {
    // this.api.adminProfile().subscribe(
    //   (res: any) => {
    //     console.log('Profile detail', res);
    //     if (res.status === true) {
    //       this.registerForm.setValue({
    //         full_name: res.data.full_name,
    //         mobile_number: res.data.mobile_number,
    //         email: res.data.email,
    //         country: res.data.country,
    //         address: res.data.address,
    //       });

    //       this.rootService.setHeaderData({
    //         profile_image: res.data.profile_image,
    //         full_name: res.data.full_name,
    //       });

    //       this.imageUrl = res.data.profile_image;
    //     } else {
    //       // this.openErrrorSnackBar(res.message);
    //     }
    //   },
    //   (error: any) => {}
    // );
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.adminUploadProfilePayload.profile_image = this.imageUrl;
    this.adminUploadProfilePayload.full_name =
      this.registerForm.value.full_name;
    this.adminUploadProfilePayload.country = this.registerForm.value.country;
    this.adminUploadProfilePayload.address = this.registerForm.value.address;

    // this.api.updateAdminProfile(this.adminUploadProfilePayload).subscribe(
    //   (res: any) => {
    //     const response: any = res;
    //     if (response.status === true) {
    //       this.openSnackBar(response.message);
    //       this.loadProfile();
    //       this.changePasswordForm.reset();
    //       this.changeSubmitted = false;
    //     } else {
    //       this.openErrrorSnackBar(response.message);
    //     }
    //   },
    //   (error: any) => {
    //     this.openErrrorSnackBar(error.message);
    //   }
    // );
  }

  // async onChangePasswordSubmit() {
  //   this.changeSubmitted = this.changePasswordForm.invalid;

  //   if (!this.changeSubmitted) {
  //     this.changeSubmitted = false;
  //     this.api.changePassword(this.changePasswordForm.value).subscribe(
  //       (res: any) => {
  //         const response: any = res;
  //         if (response.status === true) {
  //           this.openSnackBar(response.message);
  //           this.changePasswordForm.reset();
  //         } else {
  //           this.openSnackBar(response.message);
  //         }
  //       },
  //       (error: any) => {
  //         this.openErrrorSnackBar(error.message);
  //       }
  //     );
  //   }
  // }
  data(data: any, any: any) {
    throw new Error('Method not implemented.');
  }

  uploadProfile(event: any) {}
  //   this.api.uploadFile(event.target.files[0]).subscribe((res: any) => {
  //     const response: any = res;
  //     this.imageUrl = response.data[0].location;
  //   });
  // }

  // alert message after api response success
  // openSnackBar(msg: any) {
  //   this._snackbar.open(msg, 'Ok', {
  //     duration: 3000,
  //     horizontalPosition: 'right',
  //     verticalPosition: 'bottom',
  //     panelClass: ['success'],
  //   });
  // }
  // // alert message after api response failure
  // openErrrorSnackBar(msg: any) {
  //   this._snackbar.open(msg, 'Ok', {
  //     duration: 3000,
  //     horizontalPosition: 'right',
  //     verticalPosition: 'bottom',
  //     panelClass: ['danger'],
  //   });
  // }
}
