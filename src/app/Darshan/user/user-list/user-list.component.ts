import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  UserForm:any=FormGroup;
  submitted = false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.UserForm = this.formBuilder.group({
      title: ['', Validators.required],
      ProductName: ['', Validators.required],
      price: ['', Validators.required],
    
  }, {
      
  });
  }
  get f() { return this.UserForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.UserForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.UserForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.UserForm.reset();
  }

}
