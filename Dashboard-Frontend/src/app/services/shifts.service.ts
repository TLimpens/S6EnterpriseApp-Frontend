import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {HttpClient, HttpParams} from '@angular/common/http';
import {RESTcallsService} from './restcalls.service';
import {Shift} from '../models/shift';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {AuthService} from './authService';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShiftsService {

  constructor(private http: HttpClient, private REST: RESTcallsService, private authService: AuthService) { }

  getShifts(): string {
    let tempstring = '';
    this.REST.getAllShifts().subscribe(data => {
      console.log('temp', data);
      tempstring = data.toString();
      }
    );
    return tempstring;
  }

  getShiftsForUser(userId: number): Observable<Shift[]> {
    const params = new HttpParams();
    params.append('userId', userId.toString());

    const headers = this.authService.generateAuthHeader();

    const options = { params, headers };

    return this.http.get<Shift[]>(`${environment.api.base}shifts/getshiftsforuser/${userId}`, options).pipe(
      map(dataArray => dataArray.map(data => new Shift().deserialize(data))));
  }

  getAllUpcommingShifts(): Observable<Shift[]> {
    const headers = this.authService.generateAuthHeader();

    const options = { headers };

    return this.http.get<Shift[]>(`${environment.api.base}shifts/getallshifts`, options).pipe(
      map(dataArray => dataArray.map(data => new Shift().deserialize(data))));
  }


  getShift(id: number): Shift {
    const shift = new Shift();
    this.REST.getShift(id).subscribe(data => {
      shift.id = data.id;
      shift.workingEmployees = data.workingEmployees;
      shift.employeeSlots = data.employeeSlots;
      shift.shiftDate = data.shiftDate;
      }
    );

    if (shift.id === undefined) {
      console.log('check');
    }
    return shift;
  }

}
