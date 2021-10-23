import { Component, OnInit } from '@angular/core';
import {AuthorisationService} from "../authorisation.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  constructor(private authService: AuthorisationService) { }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.login(this.email, this.password).subscribe((data: any) => {
      console.log(data);
    }, (error:any) => {
      console.log("ERRROR");
      console.log(error)
    })
  }

}
