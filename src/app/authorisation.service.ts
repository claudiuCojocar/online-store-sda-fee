import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthorisationService {

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.httpClient.post("http://localhost:8081/users/login", {}, {
      headers: {
        Authorization: this.buildAuthorizationHeaders(email, password)
      }
    })
  }

  buildAuthorizationHeaders(email: string, password: string): string {
    const authHeader = 'Basic ' + btoa(email + ":" + password);
    localStorage.setItem("auth_header", authHeader);
    return authHeader;
  }

}
