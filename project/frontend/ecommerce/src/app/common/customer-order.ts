import { Address } from './address';
import { Customer } from './customer';
import { OrderItem } from './order-item';

export class CustomerOrder {
  id: number;
  orderTrackingNumber: number;
  totalQuantity: number;
  totalPrice: number;
  status: string;
  dateCreated: Date;
  lastUpdated: Date;
  orderItems: OrderItem[];
  customer: Customer;
  shippingAddress: Address;
  billingAddress: Address;
}
