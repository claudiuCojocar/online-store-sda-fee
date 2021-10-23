import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {Category, ProductRequest} from "../model/product";
import {CategoryService} from "../category.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product: ProductRequest = {} as ProductRequest;
  categoryArray : Category[] = [];

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.categoryArray = data;
    }, (error) => {
      console.log("something went wrong");
    })
  }

  createProduct(): void{
    this.productService.createProduct(this.product).subscribe((data) => {
      console.log("succesfuly stored product");
    }, (error) => {
      console.log("error = " + error);
    })
  }

}
