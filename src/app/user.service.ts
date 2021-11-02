import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserDto} from "./model/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  USER_API = "https://test-aplication312.herokuapp.com/users"

  constructor(private httpClient: HttpClient) { }

  register(userDto: UserDto): Observable<UserDto> {
    return this.httpClient.post<UserDto>(this.USER_API, userDto);
  }
}
