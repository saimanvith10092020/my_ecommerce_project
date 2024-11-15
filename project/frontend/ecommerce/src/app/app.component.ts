import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ecommerce';

  constructor(private router: Router, private authService: AuthService) {}

  getUserName() {
    return this.authService.getFirstName();
  }

  isLoggin() {
    return this.authService.isLoggedIn();
  }

  logout() {
    if (confirm('Are you sure logout?')) {
      this.authService.clear();
      alert('Logout Successful!');
      this.router.navigateByUrl('');
    }
  }
}
