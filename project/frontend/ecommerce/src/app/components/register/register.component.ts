import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../../common/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  customerFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.customerFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required]],
        password: ['', [Validators.required]],
        mobile: ['', [Validators.required]],
      }),
    });
  }

  get firstName() {
    return this.customerFormGroup.get('customer.firstName');
  }

  get lastName() {
    return this.customerFormGroup.get('customer.lastName');
  }

  get email() {
    return this.customerFormGroup.get('customer.email');
  }

  get password() {
    return this.customerFormGroup.get('customer.password');
  }

  get mobile() {
    return this.customerFormGroup.get('customer.mobile');
  }

  onSubmit() {
    if (this.customerFormGroup.invalid) {
      this.customerFormGroup.markAllAsTouched();
      return;
    }

    let customer = new Customer();
    customer = this.customerFormGroup.controls['customer'].value;

    this.customerService.saveCustomer(customer).subscribe((data) => {
      alert('Registration Successfull');
      this.router.navigateByUrl('/login');
    });
  }
}
