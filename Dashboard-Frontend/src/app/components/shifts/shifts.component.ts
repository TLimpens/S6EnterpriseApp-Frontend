import {Component, Input, OnInit} from '@angular/core';
import {ShiftsService} from '../../services/shifts.service';
import {AuthService} from '../../services/authService';
import {Shift} from '../../models/shift';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.css']
})
export class ShiftsComponent implements OnInit {

  @Input() shift: Shift;

  ngOnInit(): void {
  }

}
