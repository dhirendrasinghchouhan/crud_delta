
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { ServiceConstant } from 'src/app/core/services/service-constants';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css']
})
export class ViewUsersComponent implements OnInit {
  users: any = [];
  private readonly API_URL = ServiceConstant.URL;
  private readonly API_DELETE_URL = ServiceConstant.URL + 'remove_user';


  constructor(
    public httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router,

  ) {

  }

  ngOnInit(): void {
    this.userData();

  }


  public userData() {
    this.httpService.get(this.API_URL).subscribe((result) => {
      this.users = result['data'];
      console.log(this.users);

    })

  }

  deleteuser(row) {
    console.log('in delete');

    const data = {
      "user_id": row.user_id
    };
    this.httpService.delete(this.API_DELETE_URL, data).subscribe((result:any) => {
      if (result.status==1) {
        this.userData();
      } else {
        alert("server error ")
      }

    })
  }


  editUser(row) {
    console.log('edit')

    this.router.navigate(['/dashboard/edit-user/' + row.user_id]);
  }

}
