import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-privacylist',
  templateUrl: './privacylist.component.html',
  styleUrls: ['./privacylist.component.scss']
})
export class PrivacylistComponent implements OnInit {
  privacyEdit:any= FormGroup;
    submitted = false;
  constructor(private formBuilder: FormBuilder){ }

  ngOnInit(): void {
    this.privacyEdit = this.formBuilder.group({
      Policy: ['', Validators.required],
      Privacy: ['', Validators.required],
      Details: ['', Validators.required],
      
  }, {
      
  });
}
  

      // convenience getter for easy access to form fields
      get f() { return this.privacyEdit.controls; }

      onSubmit() {
          this.submitted = true;
  
          // stop here if form is invalid
          if (this.privacyEdit.invalid) {
              return;
          }
  
          // display form values on success
          console.log(this.privacyEdit.value);
      }
  
      onReset() {
          this.submitted = false;
          this.privacyEdit.reset();
      }
}
