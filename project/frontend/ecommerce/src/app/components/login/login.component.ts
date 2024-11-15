import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Customer } from '../../common/customer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  customerFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private customerService: CustomerService,
    private authSerive: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.customerFormGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        email: ['', [Validators.required]],
        password: ['', [Validators.required]],
      }),
    });
  }

  get email() {
    return this.customerFormGroup.get('customer.email');
  }

  get password() {
    return this.customerFormGroup.get('customer.password');
  }

  onSubmit() {
    if (this.customerFormGroup.invalid) {
      this.customerFormGroup.markAllAsTouched();
      return;
    }

    let customer = this.customerFormGroup.controls['customer'].value;
    this.customerService.login(customer).subscribe((data: any) => {
      console.log(data);
      if (data != null) {
        alert('Login Successful!');
        this.authSerive.setId(data.id);
        this.authSerive.setFirstName(data.firstName);
        this.authSerive.setLastName(data.lastName);
        this.authSerive.setEmail(data.email);
        this.authSerive.setMobile(data.mobile);
        this.router.navigateByUrl('');
      } else {
        alert('Invalid credentials');
      }
    });
  }
}
