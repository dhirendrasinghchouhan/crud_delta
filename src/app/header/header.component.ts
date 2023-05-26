import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

 a:any= localStorage.getItem('STATE');
  constructor(private router: Router)
  {

  }

  logout(){
    localStorage.setItem('STATE', 'false')
    this.router.navigate(['/sign-in']);
  }



}
