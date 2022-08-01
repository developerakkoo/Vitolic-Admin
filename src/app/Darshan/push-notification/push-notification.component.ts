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
    console.log(this. darshanForm.value);
}

onReset() {
    this.submitted = false;
    this. darshanForm.reset();
}

}