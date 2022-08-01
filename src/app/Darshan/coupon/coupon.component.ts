import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss']
})
export class CouponComponent implements OnInit {
  productForm:any= FormGroup;
  submitted = false;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      title: ['', Validators.required],
      Name: ['', Validators.required],
      Product: ['', Validators.required],
      city: ['', Validators.required],

  }, );
  }
  get f() { return this.productForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.productForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.productForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.productForm.reset();
  }

}
