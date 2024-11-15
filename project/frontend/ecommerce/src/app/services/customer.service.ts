import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../common/customer';
import { CustomerOrder } from '../common/customer-order';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  customersUrl = 'http://localhost:8080/api/customers';

  constructor(private httpClient: HttpClient) {}

  saveCustomer(customer: Customer) {
    return this.httpClient.post<Customer>(this.customersUrl, customer);
  }

  login(customer: Customer) {
    const loginUrl = 'http://localhost:8080/api/customers/login';
    return this.httpClient.post(loginUrl, customer);
  }

  getCustomer(id: any) {
    const searchCustomerUrl = 'http://localhost:8080/api/customers/' + id;
    return this.httpClient.get<Customer>(searchCustomerUrl);
  }

  getCustomerOrders(id: any) {
    const customerOrdersUrl =
      'http://localhost:8080/api/customers/' + id + '/orders';

    return this.httpClient
      .get<GetResponseCustomerOrders>(customerOrdersUrl)
      .pipe(map((response) => response._embedded.orders));
  }

  forgotPassword(email: string) {
    const url = 'http://localhost:8080/api/customers/forgot-password/' + email;
    return this.httpClient.get(url);
  }
}

interface GetResponseCustomerOrders {
  _embedded: {
    orders: CustomerOrder[];
  };
}
