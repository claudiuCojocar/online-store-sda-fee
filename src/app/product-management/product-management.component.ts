import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {

  state: string = 'CREATE_PRODUCT';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  changeState(state: string) {
    this.state = state;
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login'])
  }
}
