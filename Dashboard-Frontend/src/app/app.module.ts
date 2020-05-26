import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './components/dashboard/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserListComponent } from './components/users/user-list/user-list.component';
import {HttpClientModule} from '@angular/common/http';
import {RESTcallsService} from './services/restcalls.service';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ShiftsComponent } from './components/shifts/shifts.component';
import {AppRoutingModule} from './app-routing/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    LoginComponent,
    UserListComponent,
    ShiftsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    MatButtonToggleModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [RESTcallsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
