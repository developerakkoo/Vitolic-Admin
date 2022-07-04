import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-catering-services-list',
  templateUrl: './catering-services-list.component.html',
  styleUrls: ['./catering-services-list.component.scss']
})
export class CateringServicesListComponent implements OnInit {
  couponForm:any= FormGroup;
  submitted = false;

  display = "none";
  display1 = "none";
  constructor(private formBuilder: FormBuilder, private _snackbar:MatSnackBar,  private router: Router,) { }

  ngOnInit(): void {
    this.couponForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      Mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    });
    // this.loadCateringist();
  }

  // async loadCateringist() {
  //   this.api.cateringServicesList().subscribe((res:any) => {
  //     const response = res;
  //     if(response.status === true) {
  //       console.log(response.data)
  //     }
  //     else {
  //       this.openSnackBar(response.message);
  //     }
  //   },(error:any) =>{
  //     this.openErrrorSnackBar(error.message)
  //   })
  // }

  openModal() {
    this.display = "block";
  }
  openModal1() {
    this.display1 = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  get f() { return this.couponForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.couponForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.couponForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.couponForm.reset();
  }
  openSnackBar(msg: any) {
    this._snackbar.open(msg, 'Ok', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: ['success']
    });
  }
  // alert message after api response failure
  openErrrorSnackBar(msg: any) {
    this._snackbar.open(msg, 'Ok', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: ['danger']
    });
   }
}
