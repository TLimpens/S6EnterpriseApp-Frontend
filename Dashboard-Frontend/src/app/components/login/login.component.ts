import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../../models/user';
import {AuthService} from '../../services/authService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginUser = {} as User;

  constructor(private authService: AuthService, fb: FormBuilder, public router: Router) {

    this.loginForm = fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });

  }

  ngOnInit(): void {
    if (this.authService.checkUserSession()) {
      this.router.navigate(['shifts']);
    }
  }

  logIn() {
    this.loginUser.username = this.loginForm.get('username').value;
    this.loginUser.password = this.loginForm.get('password').value;

    this.authService.postUserLogIn(this.loginUser).subscribe(data => this.handleResponse(data), error => this.handleError(error));
  }

  handleResponse(data) {
    if (data.id !== 0) {
      this.authService.currentUser = data;
      this.authService.createSession();
      this.router.navigate(['shifts']);
    } else {
      this.handleError(data);
    }
  }

  handleError(data) {
    console.log('error', data);
  }

}
