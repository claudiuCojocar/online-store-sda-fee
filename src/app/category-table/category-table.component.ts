import {Component, Inject, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Category, Product} from "../model/product";
import {CategoryService} from "../category.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ProductService} from "../product.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css']
})
export class CategoryTableComponent implements OnInit {

  dataSource = new MatTableDataSource<Category>();
  columns = ['categoryId', 'categoryName', 'categoryDescription', 'categoryActions'];

  constructor(private categoryService: CategoryService,
              private productCategoryDialog: MatDialog) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe( (response) => {
      this.dataSource.data = response;
    })
  }

  deleteCategory(category: Category): void {
    const ref = this.productCategoryDialog.open(DeleteCategoryViewComponent, {data: category});
    ref.afterClosed().subscribe(data => {
      this.categoryService.getCategories().subscribe( (response) => {
        this.dataSource.data = response;
      })
    })
  }

  editCategory(category: Category): void {
    this.productCategoryDialog.open(UpdateCategoryViewComponent, {data: category});
  }

  showProductsOfCategory(category: Category): void {
    this.productCategoryDialog.open(ProductCategoryViewComponent, {data: category});
  }
}

@Component({
  selector: 'product-category-view',
  templateUrl: './product-category-view.html'
})
export class ProductCategoryViewComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Category,
              public productCategoryDialog: MatDialogRef<CategoryTableComponent>,
              public productService: ProductService
              ) {
  }

  productArray: Product[] = [];

  ngOnInit(
  ): void {
    this.productService.getAllByCategory(this.data.id).subscribe((response) => {
      this.productArray = response;
    })
  }

  close() {
    this.productCategoryDialog.close();
  }
}


@Component({
  selector: 'update-category-view',
  templateUrl: './update-category-view.html'
})
export class UpdateCategoryViewComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Category,
    private dialog: MatDialogRef<CategoryTableComponent>,
    private categoryService: CategoryService,
    private matSnackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
  }

  close(): void {
    this.dialog.close();
  }

  edit(): void {
    this.categoryService.update(this.data.id, this.data).subscribe((successResponse) => {
      this.matSnackBar.open("Category updated", undefined, {duration: 1000});
      this.dialog.close();
    }, (errorResponse) => {
      this.matSnackBar.open("Category update failed", undefined, {duration: 1000});
    })
  }

}


@Component({
  selector: 'delete-category-view',
  templateUrl: './delete-category-view.html'
})

export class DeleteCategoryViewComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Category,
    private dialog: MatDialogRef<CategoryTableComponent>,
    private categoryService: CategoryService,
    private matSnackBar: MatSnackBar
  ) {}

  close(): void {
    this.dialog.close();
  }

  delete(): void {
    this.categoryService.delete(this.data.id).subscribe(
      (succesResponse) => {
        this.matSnackBar.open("Deleted category", undefined, {duration: 1000});
        this.dialog.close();
      },
      (errorResponse: HttpErrorResponse) => {
        this.matSnackBar.open(errorResponse.error.message);
      }
    )
  }

  ngOnInit(): void {
  }
}
