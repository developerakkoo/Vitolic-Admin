import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup , Validators,} from '@angular/forms';

import { FormBuilder } from '@angular/forms';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-policy-add',
  templateUrl: './policy-add.component.html',
  styleUrls: ['./policy-add.component.scss']
})
export class PolicyAddComponent implements OnInit {
  public Editor = ClassicEditor;
  darshanForm:any= FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this. darshanForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      date: ['', Validators.required],
      document:['',Validators.required],
      // email: ['', [Validators.required, Validators.email]],
      description: ['', Validators.required],
      
  }, {
    
  });
  }

  get f() { return this. darshanForm.controls; }

  
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
