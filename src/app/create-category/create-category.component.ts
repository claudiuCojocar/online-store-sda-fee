import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../category.service";
import {Category} from "../model/product";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  category: Category = {} as Category;

  constructor(
    private categoryService: CategoryService,
    private matSnackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
  }

  create(): void {
    this.categoryService.createCategory(this.category).subscribe((data) => {
      this.matSnackBar.open("Created category succesfully", undefined, {duration: 500});
    }, (error) => {
      this.matSnackBar.open(error, undefined, {duration: 1500});
    });
  }

}
