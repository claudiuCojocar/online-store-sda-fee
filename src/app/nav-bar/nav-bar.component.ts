import {Component, Input, OnInit} from '@angular/core';
import {ShoppingCartService} from "../shopping-cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input() appNavBarProductsInCart = 0;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.shoppingCartService.getShoppingCart().subscribe((data) => {
      this.appNavBarProductsInCart = data.productDtos.length;
    })
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
