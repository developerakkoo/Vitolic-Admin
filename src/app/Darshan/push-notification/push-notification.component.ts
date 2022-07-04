import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-push-notification',
  templateUrl: './push-notification.component.html',
  styleUrls: ['./push-notification.component.scss']
})
export class PushNotificationComponent implements OnInit {
  darshanForm:any= FormGroup;
  submitted = false;
  display = "none";
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this. darshanForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
  }, {
    
  });
  }
  get f() { return this. darshanForm.controls; }
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this. darshanForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this. darshanForm.value, null, 4));
}

onReset() {
    this.submitted = false;
    this. darshanForm.reset();
}

}