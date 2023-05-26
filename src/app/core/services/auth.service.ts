import { Injectable } from '@angular/core';
import { ServiceConstant } from './service-constants';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // isLogin = false;
  isLogin= new BehaviorSubject <boolean>(false);


  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;



  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }



  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(loginPara: string) {
    return this.http
      .get<any>(`${ServiceConstant.URL}login?`+loginPara)
      .pipe(
        map((user) => {
          if (user.status === 1) {
            this.isLogin.next(true);
            localStorage.setItem('STATE', 'true');
            this.currentUserSubject.next(user);
          }else{
            this.isLogin.next(false);
            localStorage.setItem('STATE', 'false');
          }
          return user;

        })
      );
  }

  
}
