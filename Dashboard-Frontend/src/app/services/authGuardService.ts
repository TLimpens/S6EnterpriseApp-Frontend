import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './authService';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  routeURL: string;

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

    if (!this.authService.checkUserSession()) {
      this.router.navigate(['/login'], {
        queryParams: {
          return: state.url
        }
      });
      return Promise.resolve(false);
    } else {

      this.routeURL = this.router.url;

      return Promise.resolve(true);
    }
}}
