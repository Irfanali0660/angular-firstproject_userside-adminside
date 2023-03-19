import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthGuard } from './auth-service/auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { SignupComponent } from './page/signup/signup.component';
import { AuthServiceService } from './service/auth-service.service';
import { HomeComponent } from './page/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './page/profile/profile.component'
import { ApiInterceptorServiceService } from './service/api-interceptor.service.service';
import { NavbarComponent } from './page/navbar/navbar.component';
import { UsersComponent } from './adminpage/users/users.component';
import { adminLoginComponent } from './adminpage/login/login.component';
import { adminHomeComponent } from './adminpage/home/home.component';
import { SlidebarComponent } from './adminpage/slidebar/slidebar.component';
import { UpdateuserComponent } from './adminpage/updateuser/updateuser.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ProfileComponent,
    NavbarComponent,
    UsersComponent,
    adminLoginComponent,
    adminHomeComponent,
    UsersComponent,
    SlidebarComponent,
    UpdateuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptorServiceService, multi: true }  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
