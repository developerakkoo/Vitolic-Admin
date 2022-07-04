import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  NavigationStart,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  event$: any;

  constructor(
    private Authguardservice: AuthenticationService,
    private router: Router
  ) {}
  canActivate(): boolean {
    if (this.Authguardservice.getToken()) {
      this.router.navigateByUrl('/auth');
      return false;
    }
    return true;
  }

  canActivateChild(): boolean {
    if (this.Authguardservice.getToken()) {
      this.router.navigateByUrl('/auth');
      return false;
    }
    return true;
  }
}
