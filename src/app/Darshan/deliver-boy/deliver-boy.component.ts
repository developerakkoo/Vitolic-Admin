import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-deliver-boy',
  templateUrl: './deliver-boy.component.html',
  styleUrls: ['./deliver-boy.component.scss']
})
export class DeliverBoyComponent implements OnInit {
  DeliverEdit:any=FormGroup;
  submitted=false;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.DeliverEdit = this.formBuilder.group({
      title: ['', Validators.required],
      Name: ['', Validators.required],
      pName: ['', Validators.required],
      date: ['', Validators.required],
      OrderID: ['', Validators.required],
 
  }, );
  }
  // convenience getter for easy access to form fields
  get f() { return this.DeliverEdit.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.DeliverEdit.invalid) {
          return;
      }

      // display form values on success
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.DeliverEdit.value, null, 4));
  }

  onReset() {
      this.submitted = false;
      this.DeliverEdit.reset();
  }

}
