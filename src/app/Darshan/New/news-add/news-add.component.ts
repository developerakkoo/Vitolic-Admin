import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { FormBuilder } from '@angular/forms';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { formatDate } from '@angular/common';
import { AppService } from './../../../app.service';
@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.component.html',
  styleUrls: ['./news-add.component.scss'],
})
export class NewsAddComponent implements OnInit {
  public Editor = ClassicEditor;
  newAddForm: any = FormGroup;
  submitted = false;

  imageUrl: any = '../../../../assets/images/userPrfl.png';

  newAddPayload: any = {};
  constructor(
    private formBuilder: FormBuilder,
    
    private rooService: AppService,
    private _snackbar: MatSnackBar,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  isUpdate: boolean = false;
  updateId: any = '';
  countryName:any = [];

  ngOnInit(): void {
    this.newAddForm = this.formBuilder.group(
      {
        title: ['', Validators.required],
        date: ['', Validators.required],
        time: ['', Validators.required],
        country: ['', Validators.required],
        language: ['', Validators.required],
        long_description: ['', Validators.required],
        short_description: ['', Validators.required],
      },
      {}
    );

    this.updateId = this.activatedRoute.snapshot.params['id'];
    console.log(this.activatedRoute.snapshot.params['id'] === '0');
    this.isUpdate = this.activatedRoute.snapshot.params['id'] === '0';

    if (!this.isUpdate) {
      // this.newsListById(this.activatedRoute.snapshot.params['id']);
    }

    // this.getCountryList();
  }

  get f() {
    return this.newAddForm.controls;
  }


  // getCountryList() {
  //   this.api.getCountryList().subscribe((res:any)=>{
  //     let countryList:any = [];
  //     res.forEach((el:any)=>{
  //       countryList.push({
  //         name: el.name.common,
  //         flag: el.flags.png,
  //         code: el.cca3
  //       })
  //     })
  //     let finalCountryList = countryList.sort((a:any, b:any) => a.name.localeCompare(b.name))
  //     this.countryName = finalCountryList;
  //   })
  // }

  private formatDate(date:any) {
    let newDate = new Date(date);
    return newDate.toJSON().split('T')[0];
  }

  // newsListById(id: any) {
  //   this.api.newsListById(id).subscribe(
  //     (res: any) => {
  //       const response = res;
  //       if (response.status === true) {
  //         this.imageUrl = response.data.image;

  //         let originalDate = this.formatDate(response.data.date);
  //         this.newAddForm.setValue({
  //           title: response.data.title,
  //           date: originalDate,
  //           time: moment(response.data.time, ['h:mm A']).format('HH:mm'),
  //           country: response.data.country,
  //           language: response.data.language,
  //           long_description: response.data.long_description,
  //           short_description: response.data.short_description.replace(
  //             /<[^>]+>/g,
  //             ''
  //           ),
  //         });
  //       } else {
  //         this.openSnackBar(response.message);
  //       }
  //     },
  //     (error: any) => {
  //       this.openErrrorSnackBar(error.message);
  //     }
  //   );
  // }

  onSubmit() {
    this.submitted = true;
    //stop here if form is invalid
    if (this.newAddForm.invalid) {
      return;
    }

    if (this.newAddForm.valid) {
      this.newAddPayload['image'] = this.imageUrl;
      let time = `${this.newAddForm.value.date}T${this.newAddForm.value.time}:00.000Z`;

      // console.log(((this.newAddForm.value.time + 11) % 12 + 1))
      console.log(this.newAddForm.value);
      this.newAddPayload['title'] = this.newAddForm.value.title;
      this.newAddPayload['date'] = this.newAddForm.value.date;
      this.newAddPayload['time'] = moment(time).utc().format('hh:mm A');
      this.newAddPayload['country'] = this.newAddForm.value.country;
      this.newAddPayload['language'] = this.newAddForm.value.language;
      this.newAddPayload['short_description'] =
        this.newAddForm.value.long_description;
      this.newAddPayload['long_description'] =
        this.newAddForm.value.short_description;

      // if (!this.isUpdate) {
      //   this.api.editNews(this.newAddPayload, this.updateId).subscribe(
      //     (res: any) => {
      //       const response: any = res;
      //       if (response.status === true) {
      //         this.openSnackBar(response.message);
      //         this.router.navigate(['/admin/news-list']);
      //       } else {
      //         this.openSnackBar(response.message);
      //       }
      //     },
      //     (error: any) => {
      //       this.openErrrorSnackBar(error.message);
      //     }
      //   );
      // } else {
      //   this.api.addNews(this.newAddPayload).subscribe(
      //     (res: any) => {
      //       const response: any = res;
      //       if (response.status === true) {
      //         this.openSnackBar(response.message);
      //         this.router.navigate(['/admin/news-list']);
      //       } else {
      //         this.openSnackBar(response.message);
      //       }
      //     },
      //     (error: any) => {
      //       this.openErrrorSnackBar(error.message);
      //     }
      //   );
      // }
    }

    this.submitted = true;
    this.newAddPayload['image'] = this.imageUrl;
    if (this.newAddForm.invalid) {
      return;
    }
  }

  onCountrySelected(event: any) {
    console.log(event);
  }

  // uploadProfile(event: any) {
  //   this.api.uploadFile(event.target.files[0]).subscribe((res: any) => {
  //     const response: any = res;
  //     console.log(response.data[0].location);
  //     this.imageUrl = response.data[0].location;
  //   });
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
