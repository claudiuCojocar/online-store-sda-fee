import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ProductPageComponent, ProductUpdateDialogComponent} from './product-page/product-page.component';
import {AuthInterceptorService} from "./auth-interceptor.service";
import {MatCardModule} from "@angular/material/card";
import { CreateProductComponent } from './create-product/create-product.component';
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatPaginatorModule} from "@angular/material/paginator";
import { ProductFilteringComponent } from './product-filtering/product-filtering.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";
import { ShoppingCartPreviewComponent } from './shopping-cart-preview/shopping-cart-preview.component';
import {MatTableModule} from "@angular/material/table";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { OrderComponent } from './order/order.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatListModule} from "@angular/material/list";
import { CreateCategoryComponent } from './create-category/create-category.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import {MatMenuModule} from "@angular/material/menu";
import { ProductViewComponent } from './product-view/product-view.component';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import {
  CategoryTableComponent, DeleteCategoryViewComponent,
  ProductCategoryViewComponent,
  UpdateCategoryViewComponent
} from './category-table/category-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductPageComponent,
    CreateProductComponent,
    ProductFilteringComponent,
    NavBarComponent,
    ShoppingCartPreviewComponent,
    OrderComponent,
    CreateCategoryComponent,
    ProductManagementComponent,
    ProductViewComponent,
    ProductUpdateDialogComponent,
    RegistrationFormComponent,
    NotAuthorizedComponent,
    CategoryTableComponent,
    ProductCategoryViewComponent,
    UpdateCategoryViewComponent,
    DeleteCategoryViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatSelectModule,
    MatOptionModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatTableModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatListModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop:false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
