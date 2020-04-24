import { Injectable } from '@angular/core';
import {User} from '../classes/user';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RESTcallsService {

  domain: 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getRequest(parameter: string) {
      return this.http.get('https://jsonplaceholder.typicode.com/' + parameter).subscribe();
  }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getUser(id: number) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + id);
  }

  getAllShifts() {
    return this.http.get('https://localhost:5030/api/shifts/getallshifts');
  }

  getShift(id: number) {
    return this.http.get('https://localhost:5030/api/shifts/getshift/' + id);
  }

}
