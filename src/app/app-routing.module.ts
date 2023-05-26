import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './authentication/signup/signup.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { ViewUsersComponent } from './dashboard/view-users/view-users.component';
import { EditUserComponent } from './dashboard/edit-user/edit-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },

  {
    path: 'sign-up',component: SignupComponent

  },
  {
    path: 'sign-in',component: SigninComponent

  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
