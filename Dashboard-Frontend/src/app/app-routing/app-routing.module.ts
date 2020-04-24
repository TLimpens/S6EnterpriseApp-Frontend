import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainNavComponent } from '../components/dashboard/main-nav/main-nav.component';
import {LoginComponent} from '../components/login/login.component';

const routes: Routes = [
  { path: '', component: MainNavComponent, },
  { path: 'login', component: LoginComponent, },
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
