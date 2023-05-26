import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ViewUsersComponent } from './view-users/view-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
  declarations: [
    ViewUsersComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
