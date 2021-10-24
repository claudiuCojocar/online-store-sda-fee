import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ProductDto} from "../model/shopping-cart";
import {ShoppingCartService} from "../shopping-cart.service";

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

  constructor(private shoppingCartService: ShoppingCartService) { }

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

}
