import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailValidator } from 'ng2-validation';
// import { request } from 'http';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm:any= FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder, private router: Router,) { 
   
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      // title: ['', Validators.required],
      last_Name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
  },   {
    
});
  }
  get f() { return this.registerForm.controls; }
 
  registration() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      this.router.navigate(['/admin/dashboard']);
      var formValues = this.registerForm.value;  
      console.log("Validate") 
     
    }


 

    
    } 
    
   
}


    

