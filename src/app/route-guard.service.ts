import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private route:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // verificam daca user-ul este logat
    const loggedUser = localStorage.getItem("auth_header");
    if (loggedUser !== null) {
      // daca da, il lasam sa acceseze pagina
      return true;
    }

    //daca nu, il redirectam catre login
    this.route.navigate(['/login']);
    return false;
  }
}
