import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-month-subscription',
  templateUrl: './month-subscription.component.html',
  styleUrls: ['./month-subscription.component.scss']
})
export class MonthSubscriptionComponent implements OnInit {
  EditmonthlyForm:any= FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.EditmonthlyForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
  }, {
      // validator: MustMatch('password', 'confirmPassword')
  });
  }
  get f() { return this.EditmonthlyForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.EditmonthlyForm.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.EditmonthlyForm.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.EditmonthlyForm.reset();
  }

}
