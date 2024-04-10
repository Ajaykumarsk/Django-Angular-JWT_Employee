import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { LoginComponent } from './components/login/login.component';
import { HelloComponent } from './hello/hello.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register',component: RegisterComponent},
  { path: 'user', component: ViewUserComponent },
  { path: 'add', component: AddUserComponent },
  { path: 'update/:id', component: UpdateUserComponent},
  { path: 'dashboard', component: DashboardComponent },
  {path : 'hello',component:HelloComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
