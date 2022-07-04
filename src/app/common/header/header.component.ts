import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './../../app.service';

@Component({
  selector: 'app-header',
  host: {
    class: 'matero-header',
  },
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headerDetail: any = {};
  defaultImage: any = '../../../../assets/images/icons1.png';

  constructor(private router: Router, private rootService: AppService) {
    rootService.observeHeaderDataService.subscribe((res: any) => {
      console.log(res);
      this.headerDetail['profile_image'] = res.profile_image;
      this.headerDetail['full_name'] = res.full_name;
    });
  }

  ngOnInit(): void {
    let loginDetail: any = localStorage.getItem('userRecord');
    this.headerDetail = JSON.parse(loginDetail);
  }

  logoutAccount() {
    localStorage.clear();
    this.router.navigate(['/auth']);
  }
}
