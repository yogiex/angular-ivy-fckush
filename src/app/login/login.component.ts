import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  credentials: FormGroup;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.credentials = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  get username() {
    return this.credentials.get('username');
  }
  get password() {
    return this.credentials.get('password');
  }

  login() {
    const user = this.authService.login(this.credentials.value);
    if (user) {
      let token = Date.now().toString(10);
      localStorage.setItem('token', token);
      this.router.navigateByUrl('admin/home');
    }
  }
}
