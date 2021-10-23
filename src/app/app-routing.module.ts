import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ProductPageComponent} from "./product-page/product-page.component";
import {CreateProductComponent} from "./create-product/create-product.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'products', component: ProductPageComponent},
  {path: 'create-product', component: CreateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
