import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  productForm:any= FormGroup;
  submitted = false;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      title: ['', Validators.required],
      Address: ['', Validators.required],
      userId: ['', Validators.required],
   
      total: ['', Validators.required],
     
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
      console.log(this.productForm.value,);
  }

  onReset() {
      this.submitted = false;
      this.productForm.reset();
  }

}
