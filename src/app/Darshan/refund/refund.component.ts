import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ServiceService } from '../service/service.service';
@Component({
  selector: 'app-refund',
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.scss']
})
export class RefundComponent implements OnInit {
  RefundForm:any= FormGroup;
  submitted = false;
  list: any;
  Refund: any;
  constructor(private formBuilder:FormBuilder,
    private http: HttpClient,
    private api:ServiceService) { }

  ngOnInit(): void {

    this.api.refund()
    .subscribe((status:any) =>{
      console.log(status)
      this.list = status['refund'];
    });

    this.RefundForm = this.formBuilder.group({
     
      User: ['', Validators.required],
      orderId: ['', Validators.required],
      description: ['', Validators.required],
   
  }, {
     
  });
  }
  get f() { return this.RefundForm.controls; }

  edit(item:any){
    console.log(item);
    this.Refund = item;
    this.RefundForm.get('User').setValue(item.userId  );    
    this.RefundForm.get('orderId').setValue(item.orderId ); 
    this.RefundForm.get('description').setValue(item.description ); 
    
 
    // this.productForm.get('file ').setValue(item.imageUrl);
  }

  delete(itemid:any){
    console.log(itemid);
    
    this.http.delete(environment.apiBaseUrl + '/refund' + itemid)
    .subscribe((response:any) => {
      console.log(response);
      
    },(error:any) => {
      console.log(error);
      
    })
  }




  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.RefundForm.invalid) {
          return;
      }

      // display form values on success
      console.log(this.RefundForm.value);
  }

  onReset() {
      this.submitted = false;
      this.RefundForm.reset();
  }

}
