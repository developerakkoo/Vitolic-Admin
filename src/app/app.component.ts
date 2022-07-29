import { Component } from '@angular/core';

import { filter, pairwise } from 'rxjs/operators';
import {
  NavigationEnd,
  Router,
  NavigationStart,
  ActivatedRoute,
  RoutesRecognized,
} from '@angular/router';
  import { Location } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Admin';
  event$: any;
  showHeader: boolean = false;
  showSidebar: boolean = false;

  currentUrl: any = '';

  constructor(
    private router: Router,
    public location: Location,
   
    
  ) {
    // on route change to '/login', set the variable showHead to false

    this.event$ = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        let isAuth =
          event.url == '/' ||
          event.url == '/auth' ||
          event.url == '/auth/registration' ||
          event.url == '/auth/login' ||
          event.url == '/auth/reset' ||
          event.url == '/auth/forgot-password' ||
          event.url == '/auth/verification';

        // let isAuth = !this.authentication.getToken();
        if (isAuth) {
          this.showHeader = false;
          this.showSidebar = false;
        } else {
          this.showHeader = true;
          this.showSidebar = true;
        }
      }
    });

    this.router.events
   
      
  }

  ngOnInit() {}
}
