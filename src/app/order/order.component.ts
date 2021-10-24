import { Component, OnInit } from '@angular/core';
import {OrderService} from "../order.service";
import {OrderDto} from "../model/order";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderList: OrderDto[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((data)=> {
      this.orderList = data;
    })
  }

}
