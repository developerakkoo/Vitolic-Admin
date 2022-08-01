import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-refund',
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.scss']
})
export class RefundComponent implements OnInit {
  RefundForm:any= FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.RefundForm = this.formBuilder.group({
      title: ['', Validators.required],
      User: ['', Validators.required],
      orderId: ['', Validators.required],

      description: ['', Validators.required],
   
  }, {
     
  });
  }
  get f() { return this.RefundForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.RefundForm.invalid) {
          return;
      }

      // display form values on success
      console.log(this.RefundForm.value);
  }

  onReset() {
      this.submitted = false;
      this.RefundForm.reset();
  }

}
