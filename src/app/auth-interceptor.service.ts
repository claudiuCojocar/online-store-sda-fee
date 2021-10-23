import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor() { }

  // Service care intercepteaza orice request inainte de a-l trimite catre backend
  // si adauga header-ul de Authorization.
  // parametrii : req -> request-ul care a fost interceptat
  //              requestHandler -> mecanism prin care controlam request-ul
  intercept(req: HttpRequest<any>, requestHandler: HttpHandler): Observable<HttpEvent<any>> {
    const authHeader: string | null = localStorage.getItem("auth_header");
    if (authHeader) {
      req = req.clone({ //prindem request-ul interceptat si ii adaugam header-ul de authorization
        setHeaders: {
          Authorization: authHeader
        }
      });
    }
    return requestHandler.handle(req); // trimitem request-ul catre backend
  }
}
