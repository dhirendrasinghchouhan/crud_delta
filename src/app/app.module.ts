import { AuthenticationModule } from './authentication/authentication.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core.module';
import { ViewUsersComponent } from './dashboard/view-users/view-users.component';
import { EditUserComponent } from './dashboard/edit-user/edit-user.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
    ],
  imports: [
    BrowserModule,
  AppRoutingModule,
  ReactiveFormsModule,
  FormsModule,
  HttpClientModule,
  CoreModule,
  AuthenticationModule, // Add this line
  ReactiveFormsModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
