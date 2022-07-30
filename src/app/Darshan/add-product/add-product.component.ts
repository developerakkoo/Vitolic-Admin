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
      
  }, {
     
  });
  }
  get f() { return this.AddProductForm.controls; }


  fileEvent(event:any){
    let file: File = event.target.files[0];
    console.log(file);
    
  }
  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.AddProductForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.AddProductForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.AddProductForm.reset();
  }

}

