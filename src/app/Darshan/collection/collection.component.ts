import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  productForm:any= FormGroup;
  submitted = false;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {


    this.productForm = this.formBuilder.group({
      title: ['', Validators.required],
      Product: ['', Validators.required],
      Name: ['', Validators.required],
   
      city: ['', Validators.required],
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

}
