import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {OrderDto} from "./model/order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  ORDER_API = 'http://localhost:8081/orders'

  constructor(private httpClient: HttpClient) { }

  createOrder(): Observable<OrderDto> {
    return this.httpClient.post<OrderDto>(this.ORDER_API, {});
  }

  getOrders(): Observable<OrderDto[]> {
    return this.httpClient.get<OrderDto[]>(this.ORDER_API);
  }
}
