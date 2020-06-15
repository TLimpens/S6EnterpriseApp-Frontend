import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {RESTcallsService} from './restcalls.service';
import {Observable} from 'rxjs';
import {AuthService} from './authService';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HoursService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getMontlyWorkedHoursForUser(id): Observable<number> {
    const params = new HttpParams();
    params.append('id', id);

    const headers = this.authService.generateAuthHeader();
    const options = { params, headers };

    return this.http.get<number>(`${environment.api.base}hours/getMontlyWorkedHoursForUser/${id}`, options);
  }

  getMontlyScheduledHoursForUser(id): Observable<number> {
    const params = new HttpParams();
    params.append('id', id);

    const headers = this.authService.generateAuthHeader();
    const options = { params, headers };

    return this.http.get<number>(`${environment.api.base}hours/getMontlyScheduledHoursForUser/${id}`, options);
  }

}
