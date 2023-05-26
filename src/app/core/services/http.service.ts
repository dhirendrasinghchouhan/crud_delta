import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
// import {AuthService} from "./auth.service";
import {catchError, map, throwError} from "rxjs";
import {ServiceConstant} from "src/app/core/services/service-constants";


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  data: {};
constructor(
  private http:HttpClient
){

}

public get(url: string) {
  return this.http.get(url).pipe(map(data => {
      return this.data = data;
    })
  );
}

public post(url: string, data: any) {
  return this.http.post<any>(url, data);
}

public put(url: string, data: any) {
  return this.http.put<any>(url, data);
}
public putFormData(url: string, uid: string, data: any) {
  return this.http.post<any>(`${ServiceConstant.URL}/${url}/${uid}?_method=PUT`, data);
}
public delete(url: string, data: any) {
  return this.http.delete<any>(url, data);
}

}
