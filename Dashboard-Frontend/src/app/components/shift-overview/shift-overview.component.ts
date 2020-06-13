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

  loadedShifts: Shift[] = [];
  dataLoaded = false;

  ngOnInit(): void {

    this.shiftService.getShiftsForUser(this.authService.currentUser.id).pipe(
      finalize(() => {
        this.dataLoaded = true;
      })
    ).subscribe(data => {
      this.loadedShifts = data ;
    }
    );
  }

}
