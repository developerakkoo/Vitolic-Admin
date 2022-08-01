import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ServiceService } from '../service/service.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-oder',
  templateUrl: './oder.component.html',
  styleUrls: ['./oder.component.scss']
})
export class OderComponent implements OnInit {
  orderEdit:any= FormGroup;
  submitted = false;
  list:any;
  constructor(private formBuilder:FormBuilder, private http: HttpClient,  private api:ServiceService) { }

  ngOnInit(): void {
    this.orderEdit = this.formBuilder.group({
      title: ['', Validators.required],
      Name: ['', Validators.required],
      Date: ['', Validators.required],
      Price: ['', Validators.required, ],
      Orderid: ['', Validators.required],
      Product: ['', Validators.required],
      
  }, {
     
  });
  
  this.api.OrderList()
  .subscribe((status:any) =>{
    console.log(status)
    this.list = status['order'];
  });

  }
  
  delete(itemid:any){
    console.log(itemid);
    
    this.http.delete(environment.apiBaseUrl + '/order' + itemid)
    .subscribe((response:any) => {
      console.log(response);
      
    },(error:any) => {
      console.log(error);
      
    })
  }
  get f() { return this.orderEdit.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.orderEdit.invalid) {
          return;
      }

      // display form values on success
      console.log( this.orderEdit.value);
  }

  onReset() {
      this.submitted = false;
      this.orderEdit.reset();
  }
}
