import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ServiceService } from '../service/service.service';
@Component({
  selector: 'app-deliver-boy',
  templateUrl: './deliver-boy.component.html',
  styleUrls: ['./deliver-boy.component.scss']
})
export class DeliverBoyComponent implements OnInit {
  DeliverEdit:any=FormGroup;
  submitted=false;
  list: any;
  Deliver: any;

  constructor(private formBuilder:FormBuilder,
    private http: HttpClient,
    private api:ServiceService) { }

  ngOnInit(): void {
    this.api.deliveryboy()
    .subscribe((status:any) =>{
      console.log(status)
      this.list = status['boy'];
    });


    this.DeliverEdit = this.formBuilder.group({
    
      Name: ['', Validators.required],
      number: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      Cordinates: ['', Validators.required],
 
  }, );
  }
  // convenience getter for easy access to form fields
  get f() { return this.DeliverEdit.controls; }



  edit(item:any){
    console.log(item);
    this.Deliver = item;
    this.DeliverEdit.get('Name').setValue(item.fullName );    
    this.DeliverEdit.get('number').setValue(item.contactNumber ); 
    this.DeliverEdit.get('email').setValue(item.email); 
    this.DeliverEdit.get('password').setValue(item.password);
    this.DeliverEdit.get('Cordinates').setValue(item.cordinates);
 
    // this.productForm.get('file ').setValue(item.imageUrl);
  }

  delete(itemid:any){
    console.log(itemid);
    
    this.http.delete(environment.apiBaseUrl + '/doy' + itemid)
    .subscribe((response:any) => {
      console.log(response);
      
    },(error:any) => {
      console.log(error);
      
    })
  }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.DeliverEdit.invalid) {
          return;
      }

      // display form values on success
      console.log(this.DeliverEdit.value, null, 4);
  }

  onReset() {
      this.submitted = false;
      this.DeliverEdit.reset();
  }

}
