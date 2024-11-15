package com.edubridge.ecommerce.dto;

import lombok.Data;

@Data
public class CustomerResponse {
	Long id;
	String firstName;
	String lastName;
	String email;
	Long mobile;
}
