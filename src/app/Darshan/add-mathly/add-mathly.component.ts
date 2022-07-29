import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup , Validators,} from '@angular/forms';

import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-add-mathly',
  templateUrl: './add-mathly.component.html',
  styleUrls: ['./add-mathly.component.scss']
})
export class AddMathlyComponent implements OnInit {
  monthlyForm:any= FormGroup;
  submitted = false;
  // public Editor = ClassicEditor;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
       // this.editor = new Editor();
       this. monthlyForm = this.formBuilder.group({
        document: ['', Validators.required],
        date: ['', Validators.required],
        description: ['', Validators.required],
        // email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        
    }, {
      
    });
  }


  get f() { return this. monthlyForm.controls; }


  
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this. monthlyForm.invalid) {
        return;
    }

  }
}
