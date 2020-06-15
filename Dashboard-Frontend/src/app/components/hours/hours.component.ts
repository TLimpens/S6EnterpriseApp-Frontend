import { Component, OnInit } from '@angular/core';
import {Shift} from '../../models/shift';
import {HoursService} from '../../services/hours.service';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.css']
})
export class HoursComponent implements OnInit {

  constructor(private hoursService: HoursService) { }

  workedHours = 'Worked hours: ';
  scheduledHours = 'Scheduled hours: ';

  ngOnInit(): void {

   this.hoursService.getMontlyWorkedHoursForUser(4).subscribe(data =>
      this.workedHours += data.toString()
    );

   this.hoursService.getMontlyScheduledHoursForUser(4).subscribe(data =>
      this.scheduledHours += data.toString()
    );
  }

}
