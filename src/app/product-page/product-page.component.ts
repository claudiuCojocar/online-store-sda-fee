import {Component, Inject, OnInit} from '@angular/core';
import {ProductService} from "../product.service";
import {Category, PaginatedProducts, Product, ProductFiltering, ProductRequest} from "../model/product";
import {PageEvent} from "@angular/material/paginator";
import {ShoppingCartService} from "../shopping-cart.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ProductDto} from "../model/shopping-cart";
import {CategoryService} from "../category.service";
import {MatSnackBar} from "@angular/material/snack-bar";

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
  templateUrl: 'update-view.html',
  styleUrls: ['update-view.css']
})
export class ProductUpdateDialogComponent implements OnInit {

  categoryArray: Category[] = [];
  selectedCategoryId: number = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Product,
    public updateDialog: MatDialogRef<ProductPageComponent>,
    public categoryService: CategoryService,
    public productService: ProductService,
    public matSnackBar: MatSnackBar
    ) {
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe( (data) => {
      this.categoryArray = data;
    })
    this.selectedCategoryId = this.data.category.id;
    console.log("productIs", this.data);
  }

  close() {
    this.updateDialog.close();
  }

  updateProduct() {
    console.log(this.data);
    let productRequest: ProductRequest = {
      name: this.data.name,
      description: this.data.description,
      stock: this.data.stock,
      categoryId: this.data.category.id,
      imageURL: this.data.imageURL,
      price: this.data.price
    }
    this.productService.updateProduct(this.data.id, productRequest).subscribe((succes) => {
      this.updateDialog.close();
      this.matSnackBar.open("Product updated", undefined, { duration: 1000});
    }, (error) => {
      this.matSnackBar.open("Product update failed", undefined, { duration: 1000});
    })
  }

  compareCategories(o1: Category, o2: Category): boolean {
    return o1.id === o2.id
  }
}
