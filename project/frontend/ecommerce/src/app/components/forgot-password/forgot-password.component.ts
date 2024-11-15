import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent {
  customerFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.customerFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        email: ['', [Validators.required]],
      }),
    });
  }

  get email() {
    return this.customerFormGroup.get('customer.email');
  }

  onSubmit() {
    if (this.customerFormGroup.invalid) {
      this.customerFormGroup.markAllAsTouched();
      return;
    }

    const email = this.customerFormGroup.get('customer').value.email;

    this.customerService.forgotPassword(email).subscribe({
      complete: () => {
        //success
        alert('Credentials are emailed. Please check your email');
      },
      error: () => {
        // Handle error
        alert('Email is not existed');
      },
      next: () => {
        //next
        this.router.navigateByUrl('/login');
      },
    });
  }
}
