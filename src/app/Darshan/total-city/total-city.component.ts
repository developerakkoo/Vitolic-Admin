import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { number } from 'echarts';
@Component({
  selector: 'app-total-city',
  templateUrl: './total-city.component.html',
  styleUrls: ['./total-city.component.scss']
})
export class TotalCityComponent implements OnInit {
  submitted = false;
  formGrp:any= FormGroup;
  pinCode:any=number;
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    
    this.formGrp = this.formBuilder.group({
      pincdctrl: ['', [Validators.required, Validators.pattern("[0-9]{6}")]],
      title: ['', Validators.required],
    })

    this.pinCode = 0;
  }

  get pincodeno() {
    return this.formGrp.controls;
  }

  get f() { return this.formGrp.controls; }
  // doSubmit() {
  //   console.log(this.formGrp.value);
  //   console.log(this.pinCode);
  // }
  doSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formGrp.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formGrp.value, null, 4));
}

onReset() {
    this.submitted = false;
    this.formGrp.reset();
}

}
