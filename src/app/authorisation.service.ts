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
        Authorization: 'Basic ' + btoa(email + ":" + password)
      }
    })
  }

}
