import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../app.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  users: any[] | undefined;
  isLoggedIn: boolean = false;
  name: string | null | undefined;
  totalUsers: number = 0;
  maleUsers: number = 0;
  femaleUsers: number = 0;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.checkAuthentication();
    this.getUsers();
    this.name = localStorage.getItem('name');
  }

  checkAuthentication(): void {
    this.isLoggedIn = this.userService.isLoggedIn();
     if (this.isLoggedIn) {
      this.getUsersCount();
    } else {
      alert('You are not logged in. Please log in to access the Users.');
      this.router.navigate(['/login']); // Redirect to login page if user is not logged in
    }
  }
  getUsersCount(): void {
    this.userService.getUsers().subscribe(
      users => {
        this.totalUsers = users.length;
        this.maleUsers = users.filter(user => user.gender === 'male').length;
        this.femaleUsers = users.filter(user => user.gender === 'female').length;
      },
      error => {
        console.error('Failed to fetch users:', error);
        // Handle the error appropriately (e.g., show a message to the user)
      }
    );
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(
      (data: any[]) => {
        this.users = data;
      },
      (error) => {
        console.error('Failed to fetch users:', error);
        // Handle error (e.g., display error message)
      }
    );
  }

  deleteUser(id: number): void {
    if (this.isLoggedIn) {
      this.userService.deleteUser(id).subscribe(
        (data) => {
          console.log('User deleted successfully:', data);
          this.getUsers(); // Refresh the user list after deletion
        },
        (error) => {
          console.error('Failed to delete user:', error);
          // Handle error (e.g., display error message)
        }
      );
    } else {
      alert('You are not logged in. Please log in to delete users.');
      this.router.navigate(['/login']);
    }
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/login']); // Redirect to login page after logout
  }
}
