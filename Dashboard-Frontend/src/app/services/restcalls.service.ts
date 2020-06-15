import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Shift} from '../models/shift';
import {UserResource} from '../recources/userResource';
import {Observable} from 'rxjs';
import {AuthService} from './authService';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RESTcallsService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getUsers() {
    const params = new HttpParams();
    const options = { params };

    return this.http.get<User[]>(`${environment.api.base}user/getusers`, options).pipe(
      map(dataArray => dataArray.map(data => new User().deserialize(data))));
  }

  getUser(id) {
    const params = new HttpParams();
    params.append('id', id);
    const options = { params };

    return this.http.get<Shift>(`${environment.api.base}user/getuser/${id}`, options).pipe(
      map(data => new User().deserialize(data)));
  }

  getAllShifts(): Observable<Shift[]> {
    const params = new HttpParams();
    const options = { params };

    return this.http.get<Shift[]>(`${environment.api.base}shifts/getshifts}`, options).pipe(
      map(dataArray => dataArray.map(data => new Shift().deserialize(data))));
  }

  getShift(id): Observable<Shift> {
    const params = new HttpParams();
    params.append('id', id);

    const headers = this.authService.generateAuthHeader();
    const options = { params, headers };

    return this.http.get<Shift>(`${environment.api.base}shifts/getshift/${id}`, options).pipe(
      map(data => new Shift().deserialize(data)));
  }



}
