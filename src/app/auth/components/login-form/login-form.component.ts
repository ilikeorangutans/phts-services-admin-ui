import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Credentials } from '../../models/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  @Output()
  submitted = new EventEmitter<Credentials>();

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor() { }

  onSubmit() {
    console.log(this.loginForm.value);
    this.submitted.emit(this.loginForm.value);
  }
}
