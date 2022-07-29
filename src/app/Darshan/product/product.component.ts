import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service/service.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productForm:any= FormGroup;
  submitted = false;
  list:any;
  // proList: any = [];
  constructor(private formBuilder:FormBuilder,private api:ServiceService) { 
    this.api.ProductList().subscribe(status =>{
        console.warn(status)
        this.list.status;
      })
  
  }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
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
  // this.api.ProductList().subscribe(data =>{
  //   console.warn(data)
  //   this.list.data;
  // })


   /* Student list API */
/* Earning list API */



}
