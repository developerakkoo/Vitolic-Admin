import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  darshanForm:any= FormGroup;
  submitted = false;
  display = "none";
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this. darshanForm = this.formBuilder.group({
      fName:['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      Name: ['', Validators.required],
      Event: ['', Validators.required],
      program :['', Validators.required],
      price: ['', Validators.required],
      discount: ['', Validators.required],
      country:['',Validators.required],
      sdescriptio:['',Validators.required],
      volunteers:['',Validators.required],
      ldescriptio:['',Validators.required],
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
