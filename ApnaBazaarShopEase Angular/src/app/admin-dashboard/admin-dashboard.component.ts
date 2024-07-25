import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  constructor(private router: Router) { }

  navigateTo(option: string) {
    switch (option) {
      case 'add':
        this.router.navigate(['/add-product']);
        break;
      case 'update':
        this.router.navigate(['/update-product/${productId}']);
        break;
      case 'delete':
        this.router.navigate(['/delete-product/${productId}']);
        break;
      default:
        break;
    }
  }
}
