import { AuthService } from '../../../shared/services/auth.service';
import { OrderService } from '../../../shared/services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {
  orders$;
  // userId: string;

  constructor(
    private authService: AuthService,
    private orderService: OrderService
  ) {
    this.orders$ = this.authService.user$.switchMap(u => this.orderService.getOrdersByUser(u.uid));
    // this.orders$ = this.orderService.getOrdersByUser(this.userId);
  }

  // ngOnInit() {
  //   this.authService.user$.subscribe(user => this.userId = user.uid);
  // }
}
