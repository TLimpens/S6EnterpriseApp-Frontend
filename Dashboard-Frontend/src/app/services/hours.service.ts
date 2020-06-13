import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {RESTcallsService} from './restcalls.service';
import {Observable} from 'rxjs';
import {AuthService} from './authService';

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

    return this.http.get<number>(`https://localhost:44376/api/hours/getMontlyWorkedHoursForUser/${id}`, options);
  }

  getMontlyScheduledHoursForUser(id): Observable<number> {
    const params = new HttpParams();
    params.append('id', id);

    const headers = this.authService.generateAuthHeader();
    const options = { params, headers };

    return this.http.get<number>(`https://localhost:44376/api/hours/getMontlyScheduledHoursForUser/${id}`, options);
  }

}
