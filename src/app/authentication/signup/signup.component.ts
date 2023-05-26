import { Component,OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { ServiceConstant } from 'src/app/core/services/service-constants';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  registerForm: UntypedFormGroup;
  submitted = false;
  error = '';
  API_REGISTER_URL = ServiceConstant.URL+'Register';



  constructor(
    private formBuilder: UntypedFormBuilder,
    private httpService: HttpService,
    private router: Router,


  ) {
    this.registerForm = this.formBuilder.group({
      user_name: ['', [Validators.required]],
      user_email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      user_contact_no: ['', [Validators.required, Validators.pattern("[0-9]{10}$"), Validators.minLength(10), Validators.maxLength(10)]],
      user_password: ['', Validators.required],
      user_gender: ['', [Validators.required]],
    });
  }
  ngOnInit() {

  }


  public confirmAdd(form: UntypedFormGroup): void {

    if (form.status === 'VALID' && this.submitted === true) {
      const formData = new FormData();
      formData.append('user_name', form.value.user_name);
      formData.append('user_email', form.value.user_email);
      formData.append('user_contact_no', form.value.user_contact_no);
      formData.append('user_password', form.value.user_password);
      formData.append('user_gender', form.value.user_gender);

    } else {
    }

  }
  get f() {
    return this.registerForm.controls;
  }
  onSubmit(form: UntypedFormGroup): void {
    if (form.status === 'VALID') {

      const formData = new FormData();
      formData.append('user_name', form.value.user_name);
      formData.append('user_email', form.value.user_email);
      formData.append('user_contact_no', form.value.user_contact_no);
      formData.append('user_password', form.value.user_password);
      formData.append('user_gender', form.value.user_gender);


      this.httpService.post(this.API_REGISTER_URL, formData).subscribe(
        result => {

          if (result) {
            alert("Registeration Successful")
            this.router.navigate(['/dashboard/view-users']);
          } else {
            alert("Something went wrong!")
          }
        }
      );
    } else {

    }
  }
}
