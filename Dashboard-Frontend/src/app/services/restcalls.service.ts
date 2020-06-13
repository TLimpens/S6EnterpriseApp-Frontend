import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Shift} from '../models/shift';
import {UserResource} from '../recources/userResource';
import {Observable} from 'rxjs';
import {AuthService} from './authService';

@Injectable({
  providedIn: 'root'
})
export class RESTcallsService {

  domain: 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient, private authService: AuthService) { }

  getRequest(parameter: string) {
      return this.http.get('https://jsonplaceholder.typicode.com/' + parameter).subscribe();
  }

  getUsers() {
    const params = new HttpParams();
    const options = { params };

    return this.http.get<User[]>(`https://localhost:44376/}`, options).pipe(
      map(dataArray => dataArray.map(data => new User().deserialize(data))));
  }

  getUser(id) {
    const params = new HttpParams();
    params.append('id', id);
    const options = { params };

    return this.http.get<Shift>(`https://localhost:44376//${id}`, options).pipe(
      map(data => new User().deserialize(data)));
  }

  getUserResources() {
    const params = new HttpParams();
    const options = { params };

    return this.http.get<UserResource[]>(`https://localhost:44376/}`, options).pipe(
      map(dataArray => dataArray.map(data => new UserResource().deserialize(data))));
  }

  getUserResource(id): Observable<UserResource> {
    const params = new HttpParams();
    params.append('id', id);
    const options = { params };

    return this.http.get<UserResource>(`https://localhost:44376//${id}`, options).pipe(
      map(data => new UserResource().deserialize(data)));
  }

  getAllShifts(): Observable<Shift[]> {
    const params = new HttpParams();
    const options = { params };

    return this.http.get<Shift[]>(`https://localhost:44376/api/shifts/getshifts}`, options).pipe(
      map(dataArray => dataArray.map(data => new Shift().deserialize(data))));
  }

  getShift(id): Observable<Shift> {
    const params = new HttpParams();
    params.append('id', id);

    const headers = this.authService.generateAuthHeader();
    const options = { params, headers };

    return this.http.get<Shift>(`https://localhost:44376/api/shifts/getshift/${id}`, options).pipe(
      map(data => new Shift().deserialize(data)));
  }



}
