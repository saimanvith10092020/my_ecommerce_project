import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../common/customer';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.css',
})
export class CustomerDetailsComponent {
  customer: Customer = new Customer();

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.getCustomerDetails();
  }

  getCustomerDetails() {
    const id = sessionStorage.getItem('id');

    this.customerService.getCustomer(id).subscribe((data) => {
      this.customer = data;
      console.log(data);
    });
  }
}
