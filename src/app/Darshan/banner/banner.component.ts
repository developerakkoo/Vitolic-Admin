import { Component, OnInit } from '@angular/core';
import { ImagePickerConf } from 'ngp-image-picker';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
 
  config2: ImagePickerConf = {
    borderRadius: '4px',
    language: 'en',
    width: '500px',
    height: '200px',
  };
  config3: ImagePickerConf = {
    borderRadius: '4px',
    language: 'en',
  };
  initialImage = 'https:example-server.com/public/main.png';


  constructor() { }

  ngOnInit(): void {


  }


  onImageChanged(){

  }

}
