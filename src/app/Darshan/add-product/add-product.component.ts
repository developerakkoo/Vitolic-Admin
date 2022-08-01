import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  AddProductForm:any= FormGroup;
  submitted = false;

  productImage:any;

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.AddProductForm = this.formBuilder.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      Discounted: ['', Validators.required],
      Stock: ['', Validators.required],
      inStock: ['', Validators.required],
      Category: ['', Validators.required],
      Units: ['', Validators.required],

  }, {
     
  });
  }
  get f() { return this.AddProductForm.controls; }



  fileEvent(ev:any){
    console.log(ev.target.files);
    
    this.productImage = ev.target.files[0];

  }


  onSubmit() {
      this.submitted = true;

      //start loading
      this.spinner.show();

      //1. Create a formdata
      let formdata = new FormData();
      
      //2. Append data to the formdata
      formdata.append("title", this.AddProductForm.value.title);
      formdata.append("price", this.AddProductForm.value.price);
      formdata.append("discountedPrice", this.AddProductForm.value.Discounted);
      formdata.append("inStock", this.AddProductForm.value.inStock);
      formdata.append("category", this.AddProductForm.value.Category);
      formdata.append("stock", this.AddProductForm.value.Stock);
      formdata.append("units", this.AddProductForm.value.Units);
      formdata.append("file", this.productImage, this.productImage.name);

      //Send a post request with the form data
      this.http.post(environment.apiBaseUrl + '/products', formdata).subscribe((response) => {
        console.log(response);
        //stop loading
      this.spinner.hide();
        
      },(error) => {
        console.log(error);
        //Show error message with alert and stop loading   
      this.spinner.hide();

      })

      
      console.log(this.AddProductForm.value,);
  }

  

}

