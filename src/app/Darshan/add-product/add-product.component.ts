import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  AddProductForm:any= FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.AddProductForm = this.formBuilder.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      Discounted: ['', Validators.required],
      Stock: ['', Validators.required],
      Category: ['', Validators.required],
      Units: ['', Validators.required],
      file: ['',Validators.required],

  }, {
     
  });
  }
  get f() { return this.AddProductForm.controls; }

  onSubmit() {
      this.submitted = true;

      console.log(this.AddProductForm.value,);
  }

  

}

