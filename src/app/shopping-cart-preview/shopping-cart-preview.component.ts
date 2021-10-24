import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ProductDto} from "../model/shopping-cart";
import {ShoppingCartService} from "../shopping-cart.service";
import {OrderService} from "../order.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shopping-cart-preview',
  templateUrl: './shopping-cart-preview.component.html',
  styleUrls: ['./shopping-cart-preview.component.css']
})
export class ShoppingCartPreviewComponent implements OnInit {

  columns = ['imageURL', 'name', 'price', 'action']
  dataSource = new MatTableDataSource<ProductDto>();
  numberOfProductsInCart = 0;
  totalCost = 0;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private orderService: OrderService,
    private matSnackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.shoppingCartService.getShoppingCart().subscribe((data) => {
      this.dataSource.data = data.productDtos;
      data.productDtos.forEach(el => {
        this.totalCost = this.totalCost + el.price;
      })
    })
  }

  deleteProductFromCart(id: number): void {
    this.shoppingCartService.deleteProductFromShoppingCart(id).subscribe( (data) => {
      this.dataSource.data = data.productDtos; // tabel update
      this.numberOfProductsInCart = data.productDtos.length; // badge count update
      this.totalCost = 0;
      data.productDtos.forEach(el => {
        this.totalCost = this.totalCost + el.price;
      })
    }, (error) => {
      console.log(error);
    });
  }

  placeOrder(): void {
    this.orderService.createOrder().subscribe((data) => {
      this.matSnackBar.open("Succesfully place order", undefined, {duration: 1000});
      this.router.navigate(['/orders']);
    }, (error) => {
      console.log("error");
    })
  }

}
