import { Component, OnInit } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss'],
})
export class NewListComponent implements OnInit {
  newlistData: any = [];

  display: any = 'none';
  detePopup: any = 'none';
  viewImage: any = '';
  deleteId: any = '';

  constructor(

    private _snackbar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.getNewList();
  }

  // getNewList() {
  //   this.api.newsList().subscribe(
  //     (res: any) => {
  //       const response: any = res;
  //       if (response.status === true) {
  //         response.data.forEach((el: any) => {
  //           el.short_description = el.short_description.replace(/<[^>]+>/g, '');
  //         });
  //         this.newlistData = response.data;
  //       } else {
  //         this.openErrrorSnackBar(response.message);
  //       }
  //     },
  //     (error: any) => {
  //       this.openErrrorSnackBar(error.message);
  //     }
  //   );
  // }

  openModal() {
    this.display = 'block';
  }
  onCloseHandled() {
    this.display = 'none';
  }

  openDeleteConfirm(id: any) {
    console.log(id);
    this.detePopup = 'block';
    this.deleteId = id;
  }
  deleteConfirmClose() {
    this.detePopup = 'none';
  }

  // deleteNews() {
  //   console.log(this.deleteId);
  //   this.api.deleteNews(this.deleteId).subscribe(
  //     (res: any) => {
  //       const response: any = res;
  //       if (response.status === true) {
  //         this.openSnackBar(response.message);
  //         this.deleteConfirmClose();
  //         this.getNewList();
  //       } else {
  //         this.openSnackBar(response.message);
  //       }
  //     },
  //     (error: any) => {
  //       this.openErrrorSnackBar(error.message);
  //     }
  //   );
  // }

  viewEdit(id: any) {
    this.router.navigate([`/admin/add-news/${id}`]);
  }

  // viewImageFunction(image_url: any) {
  //   this.viewImage = image_url;
  //   this.openModal();
  // }

  // alert message after api response success
  // openSnackBar(msg: any) {
  //   this._snackbar.open(msg, 'Ok', {
  //     duration: 3000,
  //     horizontalPosition: 'right',
  //     verticalPosition: 'bottom',
  //     panelClass: ['success'],
  //   });
  // }
  // alert message after api response failure
  // openErrrorSnackBar(msg: any) {
  //   this._snackbar.open(msg, 'Ok', {
  //     duration: 3000,
  //     horizontalPosition: 'right',
  //     verticalPosition: 'bottom',
  //     panelClass: ['danger'],
  //   });
  // }
}
