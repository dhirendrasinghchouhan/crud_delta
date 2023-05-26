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
    this.authService.isLogin.subscribe(isLogin => loginBool = isLogin)
    //   if (loginBool) {
    //     return true
    //   }
    //   else {
    //     this.router.navigate["/sign-in"]

    //     return false;
    //   }
    const a = localStorage.getItem('STATE');
    console.log('le bhai tag'+a);

    if (a == 'true'){
      this.router.navigate["/dashboard/view-users"]
      return true
    }
    else{

      return false;
      this.router.navigate["/sign-in"]
    }
  }


}

