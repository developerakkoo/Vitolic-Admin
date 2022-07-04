import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-services',
  templateUrl: './add-services.component.html',
  styleUrls: ['./add-services.component.scss']
})
export class AddServicesComponent implements OnInit {
  registerForm:any= FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Purpose: ['', Validators.required],
      date: ['', Validators.required],
      deyaddress: ['',Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      Numbepersons: ['', Validators.required],
      Requestmenu: ['', Validators.required],
      payment: ['', Validators.required],
      deliveryType: ['', Validators.required],
  });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.registerForm.reset();
  }

}
