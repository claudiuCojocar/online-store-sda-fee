import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {PaginatedProducts} from "../model/product";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  paginatedProducts: PaginatedProducts = {
    content: [],
    totalElements: 0
  };

  constructor(private productService: ProductService) { }

  // metoda care ruleaza la instantierea componentei
  ngOnInit(): void {
                                                                //
    this.productService.findProducts(0, 10).subscribe((data) => {
      this.paginatedProducts = data;
      console.log(this.paginatedProducts);
    }, (error) => {
      console.log(error);
    })
  }

}
