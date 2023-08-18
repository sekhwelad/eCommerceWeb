import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Order } from '../shared/models/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  baseUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getOrdersForUser() {
    return this.httpClient.get<Order[]>(this.baseUrl + 'orders');
  }

  getOrderDetails(id: number) {
    return this.httpClient.get<Order>(this.baseUrl + 'orders/' + id);
  }
}
