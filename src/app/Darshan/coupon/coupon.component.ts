import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss']
})
export class CouponComponent implements OnInit {
  couponForm:any= FormGroup;
  submitted = false;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.couponForm = this.formBuilder.group({
      title: ['', Validators.required],
      Name: ['', Validators.required],
      Product: ['', Validators.required],
      city: ['', Validators.required],

  }, );
  }
  get f() { return this.couponForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.couponForm.invalid) {
          return;
      }

      // display form values on success
      console.log(this.couponForm.value);
  }

  onReset() {
      this.submitted = false;
      this.couponForm.reset();
  }

}
