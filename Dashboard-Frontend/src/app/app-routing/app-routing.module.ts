import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNavComponent } from '../components/dashboard/main-nav/main-nav.component';
import {LoginComponent} from '../components/login/login.component';
import {ShiftsComponent} from '../components/shifts/shifts.component';
import {AuthGuardService} from '../services/authGuardService';
import {HoursComponent} from '../components/hours/hours.component';
import {ShiftOverviewComponent} from '../components/shift-overview/shift-overview.component';

const routes: Routes = [
  { path: '', canActivate: [AuthGuardService], component: ShiftsComponent, },
  { path: 'login', component: LoginComponent, },
  { path: 'shifts', canActivate: [AuthGuardService], component: ShiftOverviewComponent, },
  { path: 'hours', canActivate: [AuthGuardService], component: HoursComponent, },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
