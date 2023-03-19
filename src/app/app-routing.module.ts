import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { SignupComponent } from './page/signup/signup.component';
import { AuthGuard } from './auth-service/auth.guard';
import { AdminAuthGuardGuard } from './auth-service/admin.auth.guard.guard'
import { ProfileComponent } from './page/profile/profile.component';
import { adminHomeComponent } from "./adminpage/home/home.component";
import { adminLoginComponent } from './adminpage/login/login.component'
import { UsersComponent } from './adminpage/users/users.component'
import { SlidebarComponent } from './adminpage/slidebar/slidebar.component';
import { UpdateuserComponent } from './adminpage/updateuser/updateuser.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'profile',component:ProfileComponent,canActivate: [AuthGuard]},


  {path:'adminlogin',component:adminLoginComponent},

  {path:'admin',component:SlidebarComponent,children:[
    {path:'home',component:adminHomeComponent},
    {path:'users',component:UsersComponent},
    {path:'users/:id',component:UpdateuserComponent},
  ],canActivate: [AdminAuthGuardGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
