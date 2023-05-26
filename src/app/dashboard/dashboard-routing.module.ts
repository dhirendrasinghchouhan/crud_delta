import { ViewUsersComponent } from './view-users/view-users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'view-users',
    pathMatch: 'full'
  },
  {
    path: 'view-users',
    component: ViewUsersComponent

  },
  {
    path: 'edit-user/:user_id',
    component: EditUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
