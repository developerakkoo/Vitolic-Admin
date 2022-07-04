import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import * as moment from 'moment';
@Component({
  selector: 'app-donationlist',
  templateUrl: './donationlist.component.html',
  styleUrls: ['./donationlist.component.scss']
})
export class DonationlistComponent implements OnInit {
  donationForm:any= FormGroup;
  submitted = false;

  display = "none";
  donationListData:any = [];
  isUpdate:boolean = false;
  editId:any = '';
  deletePopup = 'none';
  imagedisplay = 'none';
  deleteId:any = ''; 
  imageUrl:any ='';

  get f() { return this.donationForm.controls; }

  constructor(
    private formBuilder: FormBuilder, 
    private _snackbar:MatSnackBar,
   
    private router: Router
  ) { }

  ngOnInit(): void {
    this.donationForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      amount: ['', Validators.required],
    });
    // this.getDonationList();
  }

  showImage(image:any) {
    this.imageUrl = image;
    this.imagedisplay = 'block';
  }

  editDarshanTime(id:any) {
    this.editId = id;
    // this.getDonationApiById(id)
    this.isUpdate = true;
    this.openModal();
  }

  // getDonationApiById(id:any) {
  //   this.api.donationCategoryListById(id).subscribe((res:any)=>{
  //     const response = res;
  //     if(response.status === true) {
  //       this.donationForm.setValue({
  //         title: response.data.title,
  //         description: response.data.description,
  //         amount: response.data.amount,
  //       })
  //     }
  //     else {
  //       this.openSnackBar(response.message);
  //     }
  //   },(error:any)=>{
  //       this.openErrrorSnackBar(error.message);
  //   })
  // }

  closeImage() {
    this.imagedisplay = 'none';
  }

  openDeleteConfirm(id: any) {
    console.log(id);
    this.openDeleteModal();
    this.deleteId = id;
  }

  deleteConfirmClose() {
    this.deletePopup = 'none';
  }

  // deleteDarshanTiming() {
  //   console.log(this.deleteId);
  //   this.api.deleteDonationCategory(this.deleteId).subscribe(
  //     (res: any) => {
  //       const response: any = res;
  //       if (response.status === true) {

  //         this.openSnackBar(response.message);
  //         this.deleteConfirmClose();
  //         this.getDonationList();
  //       } else {
  //         this.openSnackBar(response.message);
  //       }
  //     },
  //     (error: any) => {
  //       this.openErrrorSnackBar(error.message);
  //     }
  //   );
  // }

  // getDonationList() {
  //   this.api.donationCategoryList().subscribe((res:any)=>{
  //     const response = res;
  //     if(response.status === true) {
  //       this.donationListData = response.data;
  //     }
  //     else {
  //        this.openSnackBar(response.message)
  //     }
  //   },(error)=>{
  //      this.openErrrorSnackBar(error.message)
  //   })
  // } 

    

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.donationForm.invalid) {
        return;
      }

      if(this.donationForm.valid){

      let requestPayload = {
        title: this.donationForm.value.title,
        description: this.donationForm.value.description,
        end_time: this.donationForm.value.amount,
      }
      // if(this.isUpdate){
      //    this.api.editDarshanTiming(requestPayload, this.editId).subscribe((addresponse:any)=>{
      //     const response = addresponse;
      //     if(response.status === true) {
      //       this.openSnackBar(response.message);
      //       this.getDonationList();
      //       this.onCloseHandled();
      //     }
      //     else {
      //      this.openSnackBar(response.message);
      //     }
      //   },(error:any)=>{
      //      this.openDeleteConfirm(error.message);
      //   })
      // }
      // else {
      //   this.api.addDarshanTiming(requestPayload).subscribe((addresponse:any)=>{
      //     const response = addresponse;
      //     if(response.status === true) {
      //       this.openSnackBar(response.message);
      //       this.getDonationList();
      //       this.onCloseHandled();
      //     }
      //     else {
      //      this.openSnackBar(response.message);
      //     }
      //   },(error:any)=>{
      //      this.openDeleteConfirm(error.message);
      //   })
      // }
     }
  }

  openModal() {
    this.display = "block";
  }

  onCloseHandled() {
    this.display = "none";
  }

  openDeleteModal() {
    this.deletePopup = "block";
  }

  closeDeleteModal() {
     this.deletePopup = "none";
  }

  onReset() {
    this.submitted = false;
    this.donationForm.reset();
  }
  openSnackBar(msg: any) {
    this._snackbar.open(msg, 'Ok', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: ['success']
    });
  }
  // alert message after api response failure
  openErrrorSnackBar(msg: any) {
    this._snackbar.open(msg, 'Ok', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: ['danger']
    });
   }
  }
