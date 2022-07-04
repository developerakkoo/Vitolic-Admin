import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-donation-user',
  templateUrl: './donation-user.component.html',
  styleUrls: ['./donation-user.component.scss']
})
export class DonationUserComponent implements OnInit {

  donationAllUserList:any = [];
  constructor(
    private _snackbar:MatSnackBar,

    private router: Router
  ) { }

  ngOnInit(): void {
    // this.getUserDonationList();
  }

  // getUserDonationList() {
  //   this.api.donationAllUserList().subscribe((res:any)=>{
  //     const response = res;
  //     if(response.status === true) {
  //       console.log(response.data)
  //        this.donationAllUserList = response.data;
  //     }
  //     else {
  //        this.openSnackBar(response.message);
  //     }
  //   },(error:any)=>{
  //      this.openErrrorSnackBar(error.message);
  //   })
  // }

  // openSnackBar(msg: any) {
  //   this._snackbar.open(msg, 'Ok', {
  //     duration: 3000,
  //     horizontalPosition: 'right',
  //     verticalPosition: 'bottom',
  //     panelClass: ['success']
  //   });
  // }
  // // alert message after api response failure
  // openErrrorSnackBar(msg: any) {
  //   this._snackbar.open(msg, 'Ok', {
  //     duration: 3000,
  //     horizontalPosition: 'right',
  //     verticalPosition: 'bottom',
  //     panelClass: ['danger']
  //   });
  //  }
}
