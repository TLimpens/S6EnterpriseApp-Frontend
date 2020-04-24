import { Component, OnInit } from '@angular/core';
import {ShiftsService} from '../../services/shifts.service';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.css']
})
export class ShiftsComponent implements OnInit {

  constructor(private shiftService: ShiftsService) { }

  test: string;

  ngOnInit(): void {

    this.test = this.shiftService.getShift(4).toString();

    console.log(this.test);

  }

}
