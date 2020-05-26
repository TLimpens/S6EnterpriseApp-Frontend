import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNavComponent } from '../components/dashboard/main-nav/main-nav.component';
import {LoginComponent} from '../components/login/login.component';
import {ShiftsComponent} from '../components/shifts/shifts.component';
import {AuthGuardService} from '../services/authGuardService';

const routes: Routes = [
  { path: '', canActivate: [AuthGuardService], component: ShiftsComponent, },
  { path: 'login', component: LoginComponent, },
  { path: 'shifts', canActivate: [AuthGuardService], component: ShiftsComponent, },
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
