import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  display = "none";
  menuForm:any=FormGroup;
    submitted = false;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.menuForm = this.formBuilder.group({
      AddMenu: ['', Validators.required],
      firstName: ['', Validators.required],
      price: ['', Validators.required],
      itemName:['', Validators.required],
      detail:['', Validators.required],
  }
    )}


    get f() { return this.menuForm.controls; }

    onSubmit() {
      this.submitted = true;
  
      // stop here if form is invalid
      if (this.menuForm.invalid) {
          return;
      }
  }
  
  onReset() {
      this.submitted = false;
      this.menuForm.reset();
  }
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }  
  
}
