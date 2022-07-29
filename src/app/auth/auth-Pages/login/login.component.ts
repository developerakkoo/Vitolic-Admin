import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  FormArray,
} from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Router } from '@angular/router';
import { AuthservicService } from '../authServic/authservic.service';


import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public login_form:any= FormGroup;
  submitted = false;
  ngxService: any;

  isHide: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    fb: FormBuilder,
    private api: AuthservicService,

  
  ) {}

  ngOnInit(): void {
    this.login_form = this.formBuilder.group({
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
     
  }, {
      
  });
  }
  get f() { return this.login_form.controls; }

  submitForm() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.login_form.invalid) {
       
    }
    
     var login_form

    // display form values on success
    console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.login_form.value, null, 4));
}
}