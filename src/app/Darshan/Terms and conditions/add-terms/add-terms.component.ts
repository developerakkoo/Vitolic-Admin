import { Component, OnInit,OnDestroy } from '@angular/core';
import { AbstractControl, FormControl, FormGroup , Validators,} from '@angular/forms';

import { FormBuilder } from '@angular/forms';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-add-terms',
  templateUrl: './add-terms.component.html',
  styleUrls: ['./add-terms.component.scss']
})
export class AddTermsComponent implements OnInit {
  darshanForm:any= FormGroup;
  submitted = false;
  public Editor = ClassicEditor;
  
  // html: '';
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
 
    
    // this.editor = new Editor();
    this. darshanForm = this.formBuilder.group({
      document: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required],
      // email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      
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

  }

}
