import { Component } from '@angular/core';
import { CustomerOrder } from '../../common/customer-order';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-order-details',
  templateUrl: './customer-order-details.component.html',
  styleUrl: './customer-order-details.component.css',
})
export class CustomerOrderDetailsComponent {
  customerOrders: CustomerOrder[];

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    const id = sessionStorage.getItem('id');
    this.customerService.getCustomerOrders(id).subscribe((data) => {
      this.customerOrders = data;
      console.log(this.customerOrders);
    });
  }
}
