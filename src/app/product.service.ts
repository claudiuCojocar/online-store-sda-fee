import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PaginatedProducts} from "./model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  PRODUCT_API = "http://localhost:8081/products"

  constructor(private httpClient: HttpClient) { }

  findProducts(pageNumber: number, pageSize: number): Observable<PaginatedProducts>{
    let PRODUCTS_API_WITH_PAGE_PARAMS = this.PRODUCT_API + "?pageNumber=" + pageNumber + "&pageSize=" + pageSize;
    return this.httpClient.get<PaginatedProducts>(PRODUCTS_API_WITH_PAGE_PARAMS);
  }
}
