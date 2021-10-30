import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ProductPageComponent} from "./product-page/product-page.component";
import {CreateProductComponent} from "./create-product/create-product.component";
import {ShoppingCartPreviewComponent} from "./shopping-cart-preview/shopping-cart-preview.component";
import {OrderComponent} from "./order/order.component";
import {ProductManagementComponent} from "./product-management/product-management.component";
import {RegistrationFormComponent} from "./registration-form/registration-form.component";
import {RouteGuardService} from "./route-guard.service";
import {AdminRouteGuardService} from "./admin-route-guard.service";
import {NotAuthorizedComponent} from "./not-authorized/not-authorized.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationFormComponent},
  {path: 'not-authorized', component: NotAuthorizedComponent},
  {path: 'products', component: ProductPageComponent, canActivate: [RouteGuardService]},
  {path: 'create-product', component: CreateProductComponent, canActivate: [RouteGuardService]},
  {path: 'shopping-cart', component: ShoppingCartPreviewComponent, canActivate: [RouteGuardService]},
  {path: 'orders', component: OrderComponent, canActivate: [RouteGuardService]},
  {path: 'management', component: ProductManagementComponent, canActivate: [RouteGuardService, AdminRouteGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
