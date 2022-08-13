import { Component, OnInit } from '@angular/core';
import { ImagePickerConf } from 'ngp-image-picker';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ServiceService } from '../service/service.service';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
 
  // config2: ImagePickerConf = {
  //   borderRadius: '4px',
  //   language: 'en',
  //   width: '500px',
  //   height: '200px',
  // };
  // config3: ImagePickerConf = {
  //   borderRadius: '4px',
  //   language: 'en',
  // };
  // initialImage = 'https:example-server.com/public/main.png';
  list: any;


  constructor(private formBuilder:FormBuilder,
    private http: HttpClient,
    private api:ServiceService) { }

  ngOnInit(): void {
    this.api.banner()
    .subscribe((status:any) =>{
      console.log(status)
      this.list = status['banner'];
    });


  }


  onImageChanged(){

  }

}
