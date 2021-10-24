import {Component, Inject, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {PaginatedProducts, Product, ProductFiltering} from "../model/product";
import {PageEvent} from "@angular/material/paginator";
import {ShoppingCartService} from "../shopping-cart.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ProductDto} from "../model/shopping-cart";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  pageSize: number = 5;

  paginatedProducts: PaginatedProducts = {
    content: [],
    totalElements: 0
  };

  productFiltering: ProductFiltering = {
    pageSize: this.pageSize,
    pageNumber: 0
  }

  numberOfProductsInCart = 0;

  constructor(
    private productService: ProductService,
    private shoppingCartService: ShoppingCartService,
    private updateDialog: MatDialog
  ) { }

  // metoda care ruleaza la instantierea componentei
  ngOnInit(): void {
    this.getProductsFromApi();
  }

  changePage(pageEvent: PageEvent): void {
    this.productFiltering.pageNumber = pageEvent.pageIndex;
    this.productFiltering.pageSize = pageEvent.pageSize;
    this.getProductsFromApi();
  }

  filterByName(event: any): void {
    this.productFiltering.name = event;
    this.getProductsFromApi();
  }

  filterByMinPrice(event: any): void {
    this.productFiltering.minPrice = event;
    this.getProductsFromApi();
  }

  filterByMaxPrice(event: any): void {
    this.productFiltering.maxPrice = event;
    this.getProductsFromApi();
  }

  filterByCategoryId(event: any): void {
    if (event == -1) {
      this.productFiltering.categoryId = undefined;
    } else {
      this.productFiltering.categoryId = event;
    }
    this.getProductsFromApi();
  }

  sortByPrice(event: any): void {
    if (event == "no-sort") {
      this.productFiltering.sortByPrice = undefined;
    } else {
      this.productFiltering.sortByPrice = event;
    }
    this.getProductsFromApi();
  }

  getProductsFromApi(): void {
    this.productService.findProducts(this.productFiltering).subscribe((data) => {
      this.paginatedProducts = data;
    }, (error) => {
      console.log(error);
    })
  }

  addProductToCart(id: number): void {
    this.shoppingCartService.addProductToShoppingCart(id).subscribe((data) => {
      this.numberOfProductsInCart =  data.productDtos.length;
    }, (error) => {
      console.log(error)
    });
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe((data) => {
      this.getProductsFromApi();
    })
  }

  getCurrentRole(): string | null {
    return localStorage.getItem('ROLE');
  }

  update(product: Product): void {
    this.updateDialog.open(ProductUpdateDialogComponent, {data: product})
  }
}


@Component({
  selector: 'product-update',
  templateUrl: 'update-view.html'
})
export class ProductUpdateDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Product, public updateDialog: MatDialogRef<ProductPageComponent>) {
  }

  ngOnInit(): void {
  }

  close() {
    this.updateDialog.close();
  }

  updateProduct() {
    // o sa foloseasca productService.updateProduct(id, data)
  }

}
