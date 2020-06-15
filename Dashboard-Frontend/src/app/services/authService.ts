import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {from, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentUser: User;

  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router) {
  }

  logout() {
    this.currentUser = null;
    this.deleteSession();
    this.router.navigate(['login']);
  }

  public generateAuthHeader(): HttpHeaders {
    return new HttpHeaders().set('Authorization', this.currentUser.token);
  }

  postUserLogIn(user): Observable<User> {
    return this.http.post(`${environment.api.base}users/postUserLogin`, user)
      .pipe(map(data => new User().deserialize(data)));
  }

  createSession() {
    this.cookieService.set('session', JSON.stringify(this.currentUser), 1, '/', environment.cookie.domain);
  }

  deleteSession() {
    this.cookieService.delete('session');
  }

  checkUserSession() {

    if (this.currentUser != null) {
      return true;
    }

    if (this.cookieService.check('session')) {
      this.currentUser = JSON.parse(this.cookieService.get('session'));
      return true;
    }

    return false;
  }
}
