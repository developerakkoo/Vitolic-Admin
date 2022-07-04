import { Component, Input, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { sidebarData } from '../../constants/sidebar-data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sidenavData: any = [];
  isChildActiveLink: any = '';
  activePath: any = '';
  event:any
  constructor(
    public router: Router
  ) {}

  ngOnInit(): void {
    this.sidenavData = sidebarData;
  }

  redirectFunction(obj: any) {
    this.sidenavData.forEach((el: any) => {
      el.isActive = el.name === obj.name
    })
    if (obj.link === '') {
      this.router.navigate([this.router.url])
    }
    else {
      this.router.navigate(['/' + obj.link])
    }
    this.isChildActiveLink = '';
    
  }

  redirectChildFunction(childobj: any) {
    this.isChildActiveLink = childobj.link;
    this.router.navigate(['/' + childobj.link]);
  }

}
