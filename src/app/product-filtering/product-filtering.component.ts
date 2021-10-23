import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CategoryService} from "../category.service";
import {Category} from "../model/product";
import {SelectionChange} from "@angular/cdk/collections";

@Component({
  selector: 'app-product-filtering',
  templateUrl: './product-filtering.component.html',
  styleUrls: ['./product-filtering.component.css']
})
export class ProductFilteringComponent implements OnInit {

  @Output() searchByNameEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output() searchByMinPriceEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() searchByMaxPriceEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() searchByCategoryIdEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() sortByPriceEvent: EventEmitter<string> = new EventEmitter<string>();

  categoryArray: Category[] = [
    {
      id: -1,
      name: "No category selected",
      description: "-"
    }
  ];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe( (data) => {
      this.categoryArray = this.categoryArray.concat(data);
    })
  }

  emit(event: any): void {
    this.searchByNameEvent.emit(event.target.value);
  }

  emitMinPrice(event:any): void {
    this.searchByMinPriceEvent.emit(event.target.value);
  }

  emitMaxPrice(event:any): void {
    this.searchByMaxPriceEvent.emit(event.target.value);
  }

  emitCategoryId(event: any): void {
    this.searchByCategoryIdEvent.emit(event.value);
  }

  emitSortByPrice(event: any): void {
    this.sortByPriceEvent.emit(event.value);
  }
}
