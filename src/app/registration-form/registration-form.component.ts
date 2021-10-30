import { Component, OnInit } from '@angular/core';
import {Address, UserDto} from "../model/user";
import {UserService} from "../user.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  userDto: UserDto = {
    roleName: 'CUSTOMER',
    userAddress: [] as Address[],
  } as UserDto;

  userAddress: Address = {} as Address;

  constructor(
    private userService: UserService,
    private matSnackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  save(): void {
    this.userDto.userAddress.push(this.userAddress);
    this.userService.register(this.userDto).subscribe( (success) => {
      this.matSnackBar.open("Registration went succesfully", undefined, {duration: 1000});
      this.router.navigate(['/login']);
    })
  }
}
