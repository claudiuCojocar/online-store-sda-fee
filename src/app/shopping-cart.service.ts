import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ShoppingCartDto} from "./model/shopping-cart";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  SHOPPING_CART_API = 'http://localhost:8081/shopping-cart'

  constructor(private httpClient: HttpClient) { }

  addProductToShoppingCart(productId: number): Observable<ShoppingCartDto> {
    return this.httpClient.put<ShoppingCartDto>(this.SHOPPING_CART_API, productId);
  }

  getShoppingCart(): Observable<ShoppingCartDto> {
    return this.httpClient.get<ShoppingCartDto>(this.SHOPPING_CART_API);
  }

  deleteProductFromShoppingCart(id: number): Observable<ShoppingCartDto> {
    return this.httpClient.delete<ShoppingCartDto>(this.SHOPPING_CART_API + "/products/" + id);
  }

}
