import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-view-edit-event',
  templateUrl: './view-edit-event.component.html',
  styleUrls: ['./view-edit-event.component.scss']
})
export class ViewEditEventComponent implements OnInit {
  darshanForm:any= FormGroup;
  submitted = false;
  display = "none";
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this. darshanForm = this.formBuilder.group({
      fiName: ['', Validators.required],
      firstName: ['', Validators.required],
      firstDescription: ['', Validators.required],
      fitName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      date: ['', Validators.required],
      time:['',Validators.required],
      country:['',Validators.required],
      program:['',Validators.required],
      Shdescription:['',Validators.required],
      volunteers:['',Validators.required],
      Lodescriptio:['',Validators.required],
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
