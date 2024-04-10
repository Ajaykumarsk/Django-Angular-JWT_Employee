import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  users: any[]=[];
  constructor(private http: HttpClient){
    this.loadUsers();
  }

  loadUsers() {
    debugger;
    this.http.get('http://127.0.0.1:8000/api/hello/').subscribe((res:any)=>{
      this.users = res.data;
    })
  }
}
