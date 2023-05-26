import { Component } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { ServiceConstant } from 'src/app/core/services/service-constants';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

  updateForm: FormGroup;
  user_id: any;
  API_URL = ServiceConstant.URL+'user_detail?user_id=';
  API_UPDATE_URL = ServiceConstant.URL+'update_user';
  constructor(
    private formBuilder: UntypedFormBuilder,
    private httpService: HttpService,
    private route: ActivatedRoute

  ) {
    this.route.params.subscribe(params => {
      this.user_id = params['user_id'];
      this.API_URL = this.API_URL + params['user_id'];

    });
    console.log(this.user_id);

    this.updateForm = this.formBuilder.group({
      user_name: ['', [Validators.required]],
      user_email: ['', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      user_contact_no: ['', [Validators.required, Validators.pattern("[0-9]{10}$"), Validators.minLength(10), Validators.maxLength(10)]],
      user_password: ['', Validators.required],
      user_gender: ['', [Validators.required]],
    });
  }
  ngOnInit() {
    this.getEditData();
  }

  getEditData() {
    this.httpService.get(this.API_URL).subscribe((result) => {

      this.updateForm.setValue({
        user_name: result['data'][0].user_name,
        user_email: result['data'][0].user_email,
        user_contact_no: result['data'][0].user_phone_no,
        user_password: result['data'][0].user_pwd,
        user_gender: result['data'][0].user_gender,
      });

    });

  }


  onSubmit(form: UntypedFormGroup): void {
    if (form.status === 'VALID') {

      const formData = new FormData();
      // formData.append('user_id', this.user_id);
      formData.append('user_name', form.value.user_name);
      formData.append('user_email', form.value.user_email);
      formData.append('user_contact_no', form.value.user_contact_no);
      formData.append('user_password', form.value.user_password);
      formData.append('status', form.value.user_gender);


      this.httpService.put(this.API_UPDATE_URL, formData).subscribe(
        result => {

          if (result) {

          } else {

          }
        }
      );
    } else {
      alert("Something went wrong!")

    }
  }
}
