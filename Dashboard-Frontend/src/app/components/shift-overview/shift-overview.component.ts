import { Component, OnInit } from '@angular/core';
import {Shift} from '../../models/shift';
import {ShiftsService} from '../../services/shifts.service';
import {AuthService} from '../../services/authService';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-shift-overview',
  templateUrl: './shift-overview.component.html',
  styleUrls: ['./shift-overview.component.css']
})
export class ShiftOverviewComponent implements OnInit {

  constructor(private shiftService: ShiftsService, private authService: AuthService) { }

  myShifts: Shift[] = [];
  allShifts: Shift[] = [];
  myDataLoaded = false;
  allDataLoaded = false;

  ngOnInit(): void {

    this.shiftService.getShiftsForUser(this.authService.currentUser.id).pipe(
      finalize(() => {
        this.myDataLoaded = true;
      })
    ).subscribe(data => {
      this.myShifts = data ;
    }
    );

    this.shiftService.getAllUpcommingShifts().pipe(
      finalize(() => {
        this.allDataLoaded = true;
      })
    ).subscribe(data => {
        this.allShifts = data ;
      }
    );
  }

}
