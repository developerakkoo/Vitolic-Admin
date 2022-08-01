import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  couponForm:any= FormGroup;
  submitted:any = false;

  display = "none";
  constructor(private formBuilder: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.couponForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      Mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
      // validator: MustMatch('password', 'confirmPassword')
    });
  }
  get f() { return this.couponForm.controls; }


 




  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.couponForm.invalid) {
          return;
      }

      // display form values on success
      console.log(this.couponForm.value);
  }
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart:any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'line',
      
      data: {
          datasets: [{
            label: 'Looping tension',
            data: [65, 59, 80, 81, 26, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
        }],
           labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      },
  }
  
  );

  }
}
