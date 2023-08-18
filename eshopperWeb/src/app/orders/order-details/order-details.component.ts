import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/order';
import { OrderService } from '../order.service';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {
  order?: Order;

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private breadCrumbService: BreadcrumbService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    id &&
      this.orderService.getOrderDetails(+id).subscribe({
        next: (order) => {
          this.order = order;
          this.breadCrumbService.set(
            '@OrderDetails',
            `Order# ${order.id} - ${order.orderStatus}`
          );
        },
      });
  }
}
