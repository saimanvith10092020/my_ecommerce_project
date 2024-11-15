package com.edubridge.ecommerce.dto;

import java.util.Set;

import com.edubridge.ecommerce.entity.Address;
import com.edubridge.ecommerce.entity.Customer;
import com.edubridge.ecommerce.entity.Order;
import com.edubridge.ecommerce.entity.OrderItem;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class Purchase {
    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;

}