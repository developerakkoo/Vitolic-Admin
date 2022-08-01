import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-oder',
  templateUrl: './oder.component.html',
  styleUrls: ['./oder.component.scss']
})
export class OderComponent implements OnInit {
  orderEdit:any= FormGroup;
  submitted = false;
  constructor(private formBuilder:FormBuilder) { }

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
