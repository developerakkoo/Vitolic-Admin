import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {
  termsEdit:any=FormGroup;
    submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.termsEdit = this.formBuilder.group({
      Document: ['', Validators.required],
      Terms: ['', Validators.required],
      Details: ['', Validators.required],
      
  }, {
      
  });
  }

  get f() { return this.termsEdit.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.termsEdit.invalid) {
          return;
      }

      // display form values on success
      console.log(this.termsEdit.value);
  }

  onReset() {
      this.submitted = false;
      this.termsEdit.reset();
  }

}
