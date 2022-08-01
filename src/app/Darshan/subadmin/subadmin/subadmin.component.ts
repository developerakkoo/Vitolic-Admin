import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-subadmin',
  templateUrl: './subadmin.component.html',
  styleUrls: ['./subadmin.component.scss']
})
export class SubadminComponent implements OnInit {
  registerForm:any= FormGroup;
  CheckForm:any=FormGroup;
  submitted = false;
  submitteded=false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
  }, );
  this.CheckForm = this.formBuilder.group({
    title: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
    acceptTerms: [false, Validators.requiredTrue]
}, );
  }
   // convenience getter for easy access to form fields
   get f() { return this.registerForm.controls; }

   onSubmit() {
       this.submitted = true;

       // stop here if form is invalid
       if (this.registerForm.invalid) {
           return;
       }

       // display form values on success
       console.log(this.registerForm.value);
   }

   onReset() {
       this.submitted = false;
       this.registerForm.reset();
   }
   onSubmits(){
    this.submitteded = true;

    // stop here if form is invalid
    if (this.CheckForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.CheckForm.value, null, 4));
}

   }
   
