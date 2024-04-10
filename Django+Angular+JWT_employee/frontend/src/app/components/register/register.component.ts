import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  registrationError: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  register() {
    if (this.password !== this.confirmPassword) {
      this.registrationError = 'Passwords do not match';
      return;
    }

    const requestData = {
      username: this.username,
      email: this.email,
      password: this.password,
      confirm_password: this.confirmPassword
    };

    this.http.post<any>('http://localhost:8000/api/register/', requestData).subscribe(response => {
      // Registration successful, navigate to login or any other page
      this.router.navigate(['/login']);
    }, error => {
      // Registration failed, handle error
      console.error('Registration failed:', error);
      this.registrationError = error.error.detail || 'Registration failed';
    });
  }
}
