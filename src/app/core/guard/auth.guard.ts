import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { ServiceConstant } from '../services/service-constants';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private http: HttpClient
  ) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
let loginBool;
       this.authService.isLogin.subscribe(isLogin => loginBool=isLogin)
      if(loginBool)
      {
        return true
      }

// console.log('Haan '+ loginBool);

      this.router.navigate["/sign-in"]
      return false;

  }


}
// console.log('Haan bhai auth guard me hi hu');

//   if (!this.authService.isLogin) {
//     console.log('in if');
//     return true
//   }
//   return false
//   console.log('Haan bhai bahar hu');
// }
// )
