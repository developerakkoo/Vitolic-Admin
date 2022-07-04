import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-subadmin-list',
  templateUrl: './subadmin-list.component.html',
  styleUrls: ['./subadmin-list.component.scss']
})
export class SubadminListComponent implements OnInit {
  parmissionForm:any= FormGroup;
  submitted = false;
  display = "none";

  subadminList:any = [];
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // this.loadSubadminList();
    this.parmissionForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
  },);
  }
  get f() { return this.parmissionForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.parmissionForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.parmissionForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.parmissionForm.reset();
  }

//   loadSubadminList() {
//     this.api.subAdminList().subscribe((res:any)=>{
//       const response:any = res;
//       if(response.status) {
//         console.log(response.data)
//         this.subadminList = response.data
//       }
//       else {

//       }
//     },(error:any)=>{

//     })
//   }

//   // alert message after api response success
//  openSnackBar(msg: any) {
//   this._snackbar.open(msg, 'Ok', {
//     duration: 3000,
//     horizontalPosition: 'right',
//     verticalPosition: 'bottom',
//     panelClass: ['success']
//   });
// }
// // alert message after api response failure
// openErrrorSnackBar(msg: any) {
//   this._snackbar.open(msg, 'Ok', {
//     duration: 3000,
//     horizontalPosition: 'right',
//     verticalPosition: 'bottom',
//     panelClass: ['danger']
//   });
//  }

}
