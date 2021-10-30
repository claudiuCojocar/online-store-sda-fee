import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PaginatedProducts, Product, ProductFiltering, ProductRequest} from "./model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  PRODUCT_API = "http://localhost:8081/products"

  constructor(private httpClient: HttpClient) { }

  findProducts(productFiltering: ProductFiltering): Observable<PaginatedProducts>{
    let PRODUCTS_API_WITH_PAGE_PARAMS =
      this.PRODUCT_API + "?pageNumber=" +
        productFiltering.pageNumber + "&pageSize=" + productFiltering.pageSize;

    if (productFiltering.name) {
      PRODUCTS_API_WITH_PAGE_PARAMS = PRODUCTS_API_WITH_PAGE_PARAMS + "&name=" + productFiltering.name;
    }

    if (productFiltering.minPrice) {
      PRODUCTS_API_WITH_PAGE_PARAMS = PRODUCTS_API_WITH_PAGE_PARAMS + "&minPrice=" + productFiltering.minPrice;
    }

    if (productFiltering.maxPrice) {
      PRODUCTS_API_WITH_PAGE_PARAMS = PRODUCTS_API_WITH_PAGE_PARAMS + "&maxPrice=" + productFiltering.maxPrice;
    }

    if (productFiltering.categoryId) {
      PRODUCTS_API_WITH_PAGE_PARAMS = PRODUCTS_API_WITH_PAGE_PARAMS + "&categoryId=" + productFiltering.categoryId;
    }

    if (productFiltering.sortByPrice) {
      PRODUCTS_API_WITH_PAGE_PARAMS = PRODUCTS_API_WITH_PAGE_PARAMS + "&sortByPrice=" + productFiltering.sortByPrice;
    }

    return this.httpClient.get<PaginatedProducts>(PRODUCTS_API_WITH_PAGE_PARAMS);
  }

  createProduct(product: ProductRequest): Observable<ProductRequest> {
    return this.httpClient.post<ProductRequest>(this.PRODUCT_API, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.PRODUCT_API + "/" + id);
  }

  updateProduct(id: number, product: ProductRequest): Observable<ProductRequest> {
    return this.httpClient.put<ProductRequest>(this.PRODUCT_API + "/" + id, product);
  }

  getAllByCategory(id: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.PRODUCT_API + "/categories/" + id);
  }
}
