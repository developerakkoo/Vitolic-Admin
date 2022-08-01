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

      // stop here if form is invalid
      if (this.AddProductForm.invalid) {
          return;
      }

      // display form values on success
      console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.AddProductForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.AddProductForm.reset();
  }

}

