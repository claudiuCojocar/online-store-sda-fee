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
import { ProductPageComponent } from './product-page/product-page.component';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductPageComponent,
    CreateProductComponent,
    ProductFilteringComponent,
    NavBarComponent,
    ShoppingCartPreviewComponent
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
        MatTableModule
    ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
