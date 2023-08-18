import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: OrderComponent },
  {
    path: ':id',
    component: OrderDetailsComponent,
    data: { breadcrumb: { alias: 'OrderDetails' } },
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {}
