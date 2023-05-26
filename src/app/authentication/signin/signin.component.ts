import { AuthService } from './../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators, FormsModule } from '@angular/forms';
import { ServiceConstant } from 'src/app/core/services/service-constants';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  loginForm!: UntypedFormGroup;
  submitted = false;
  returnUrl!: string;
  error = '';
  hide = true;
  showPassword: boolean = false;
  formError: any = {};
  private readonly API_URL = ServiceConstant.URL;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      user_email: ['', Validators.required],
      user_pwd: ['', Validators.required],
    });
  }
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.error = '';
    if (this.loginForm.invalid) {
      this.error = 'Username and Password not valid !';
      return;
    } else {
      const loginParama = 'user_email='+this.f['user_email'].value+'&user_pwd='+this.f['user_pwd'].value;
      this.authService.login(loginParama)
        .subscribe(
          (res) => {

            if (res.status==true) {
              this.router.navigate(['/dashboard/view-users']);
            } else {
              this.error = 'Invalid Login';
              this.formError = res.errors;
            }
          },
          (error) => {
            this.error = error;
            this.submitted = false;
          }
        );
    }

}
  showHidePassword() {
    this.showPassword = !this.showPassword;
  }
}
