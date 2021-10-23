import { Component, OnInit } from '@angular/core';
import {AuthorisationService} from "../authorisation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  constructor(private authService: AuthorisationService,
              private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.authService.login(this.email, this.password).subscribe((data: any) => {
      this.router.navigate(['/products']);
    }, (error:any) => {
      console.log("ERRROR");
      console.log(error)
    })
  }

}
