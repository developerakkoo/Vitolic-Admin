import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { number } from 'echarts';
@Component({
  selector: 'app-total-city',
  templateUrl: './total-city.component.html',
  styleUrls: ['./total-city.component.scss']
})
export class TotalCityComponent implements OnInit {
  totalCity:any= FormGroup;
  submitted = false;
  pinCode:any=number;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    
    this.totalCity = this.formBuilder.group({
      pincdctrl: ['', [Validators.required, Validators.pattern("[0-9]{6}")]],
      title: ['', Validators.required],
    })

    this.pinCode = 0;
  }

  // get pincodeno() {
  //   return this.totalCity.controls;
  // }

//   get f() { return this.totalCity.controls; }
//   // doSubmit() {
//   //   console.log(this.totalCity.value);
//   //   console.log(this.pinCode);
//   // }
//   onSubmit() {
//     this.submitted = true;

//     // stop here if form is invalid
//     if (this.totalCity.invalid) {
//         return;
//     }

//     // display form values on success
//     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.totalCity.value, null, 4));
// }

// onReset() {
//     this.submitted = false;
//     this.totalCity.reset();
// }

get f() { return this.totalCity.controls; }

onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.totalCity.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.totalCity.value, null, 4));
}

onReset() {
    this.submitted = false;
    this.totalCity.reset();
}
}
