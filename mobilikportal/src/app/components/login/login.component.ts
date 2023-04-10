import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import UsersJson from 'src/app/users.json';

interface USERS {
  username: String;
  password: String;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  flag: boolean = false;
  Users: USERS[] = UsersJson;
  windowWidth: string = '';
  showSplash: boolean = true;

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor() {}

  onSubmit() {
    if (
      this.Users[0].username == this.loginForm.controls['username'].value &&
      this.Users[0].password == this.loginForm.controls['password'].value
    ) {
      this.windowWidth = '-' + window.innerHeight + 'px';
      setTimeout(() => {
        this.showSplash = !this.showSplash;
      }, 1000);
    } else {
      this.flag = true;
      setTimeout(() => {
        this.flag = false;
      }, 3000);
    }
  }
}
