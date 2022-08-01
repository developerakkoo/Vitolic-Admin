import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
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
  product:any;

  // proList: any = [];
  constructor(private formBuilder:FormBuilder,
    private http: HttpClient,
    private api:ServiceService) { 
   
  
  }

  ngOnInit(){

    this.api.ProductList()
    .subscribe((status:any) =>{
      console.log(status)
      this.list = status['products'];
    });


    this.productForm = this.formBuilder.group({
      title: ['', Validators.required],
      price: ['', Validators.required],
      Discounted: ['', Validators.required],
      inStock:['',Validators.required],
      Stock: ['', Validators.required],
      Category: ['', Validators.required],
      Units: ['', Validators.required],
      file: ['',Validators.required],


  }, );

  
  }


  edit(item:any){
    console.log(item);
    this.product = item;
    this.productForm.get('title').setValue(item.title);    
    this.productForm.get('price').setValue(item.price); 
    this.productForm.get('Discounted').setValue(item.discountedPrice); 
    this.productForm.get('inStock').setValue(item.inStock);
    this.productForm.get('Category').setValue(item.category);
    this.productForm.get('Stock').setValue(item.stock);
    this.productForm.get('Units').setValue(item.units);
    // this.productForm.get('file ').setValue(item.imageUrl);
  }

  delete(itemid:any){
    console.log(itemid);
    
    this.http.delete(environment.apiBaseUrl + '/products' + itemid)
    .subscribe((response:any) => {
      console.log(response);
      
    },(error:any) => {
      console.log(error);
      
    })
  }
  get f() { return this.productForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      // if (this.productForm.invalid) {
      //     return;
      // }

      // display form values on success
      console.log(this.productForm.value);
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
