import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {HttpClient} from '@angular/common/http';
import {RESTcallsService} from './restcalls.service';

@Injectable({
  providedIn: 'root'
})
export class ShiftsService {

  constructor(private http: HttpClient, private REST: RESTcallsService) { }

  getShifts(): string {
    let tempstring = '';
    this.REST.getAllShifts().subscribe(data => {
      console.log('temp', data);
      tempstring = data.toString();
      }
    );
    return tempstring;
  }

  getShift(id: number): string {
    let tempstring = '';
    this.REST.getShift(id).subscribe(data => {
        console.log('temp', data);
        tempstring = data.toString();
      }
    );
    return tempstring;
  }

}
