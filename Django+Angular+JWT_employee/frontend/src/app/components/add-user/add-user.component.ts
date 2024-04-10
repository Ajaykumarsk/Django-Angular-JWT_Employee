import { Component } from '@angular/core';
import { UserService } from 'src/app/app.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
    
    name: string | null | undefined;
    
    isLoggedIn: boolean = false;

    constructor(private service: UserService, private router: Router) { }
  
    ngOnInit(): void {
      
      this.checkAuthentication();
      this.name = localStorage.getItem('name');
    }
    checkAuthentication(): void {
      this.isLoggedIn = this.service.isLoggedIn(); // Implement this method in your UserService to check if user is logged in
  
      if (this.isLoggedIn) {
        this.addUser();
      } else {
        alert('You are not logged in. Please log in to access the dashboard.');
        this.router.navigate(['/login']); // Redirect to login page if user is not logged in
      }
    }
    data: any

    form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      department: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      dateOfJoining: new FormControl('', Validators.required)
    });

    addUser() {
      this.data = this.form.value;
      this.service.addUser(this.data).subscribe(data => {
        // redirect to home page
        this.router.navigate(['user']);
      });
    }

    logout(): void {
    this.service.logout(); // Call the logout function from your service
    // Redirect to the login page or any other page after logout
    this.router.navigate(['/login']);
  }
    

    

}