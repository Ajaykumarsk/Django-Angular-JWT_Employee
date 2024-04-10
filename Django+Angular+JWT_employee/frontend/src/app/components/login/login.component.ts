import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: string = '';

  constructor(private http: HttpClient,private router: Router) { }

  login() {
    // Ensure both username and password are provided
    if (!this.username || !this.password) {
      console.error('Username and password are required.');
      return;
    }

    // Make HTTP POST request to obtain token
    this.http.post<any>('http://127.0.0.1:8000/api/login/', { 
      username: this.username, 
      password: this.password 
    }).subscribe(response => {
      // Handle successful login
      localStorage.setItem('token', response.access);
      localStorage.setItem('refresh_token', response.refresh);
      localStorage.setItem('name',this.username);
      // Redirect or perform further actions
      this.router.navigate(['/dashboard'])
    }, error => {
      // Handle login error
      console.error('Login failed:', error);
      this.loginError = 'Invalid username or password';
    });
  }
}
