import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalUsers: number = 0;
  maleUsers: number = 0;
  femaleUsers: number = 0;
  totalDepartments: number = 0;
  totalLocations: number = 0;
  isLoggedIn: boolean = false;
  name: string | null | undefined;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.checkAuthentication();
    this.name = localStorage.getItem('name');
  }

  checkAuthentication(): void {
    this.isLoggedIn = this.userService.isLoggedIn(); // Implement this method in your UserService to check if user is logged in

    if (this.isLoggedIn) {
      this.getUserStatistics();
    } else {
      alert('You are not logged in. Please log in to access the dashboard.');
      this.router.navigate(['/login']); // Redirect to login page if user is not logged in
    }
  }

  getUserStatistics(): void {
    this.userService.getUsers().subscribe(
      users => {
        this.totalUsers = users.length;
        this.maleUsers = users.filter(user => user.gender === 'male').length;
        this.femaleUsers = users.filter(user => user.gender === 'female').length;

        // Count unique departments
        const departments = new Set(users.map(user => user.department));
        this.totalDepartments = departments.size;

        // Count unique locations
        const locations = new Set(users.map(user => user.location));
        this.totalLocations = locations.size;
      },
      error => {
        console.error('Failed to fetch users:', error);
        // Handle the error appropriately (e.g., show a message to the user)
      }
    );
  }

  logout(): void {
    this.userService.logout(); // Call the logout function from your service
    // Redirect to the login page or any other page after logout
    this.router.navigate(['/login']);
  }
}
