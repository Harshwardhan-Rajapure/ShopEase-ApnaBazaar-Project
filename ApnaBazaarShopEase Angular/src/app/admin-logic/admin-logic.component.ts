import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-logic',
  templateUrl: './admin-logic.component.html',
  styleUrls: ['./admin-logic.component.css']
})
export class AdminLogicComponent {

  invalidLogin: boolean = false;

  constructor(private router: Router) { }

  onLogin(form: NgForm) {
    if (form.valid) {
      const { username, password } = form.value;
      
      // Replace 'yourUsername' and 'yourPassword' with your actual username and password
      if (username === 'harsh' && password === 'harsh123') {
        this.router.navigate(['/admin-dashboard']);
      } else {
        this.invalidLogin = true;
      }
    }
  }
}
