import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {

  loginData = {
    username: '',
    password: ''
  };

  constructor(private userService: UserService, private router: Router,
              public authService: AuthService) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.userService.authenticate(this.loginData.username, this.loginData.password).subscribe(
        (response) => {
          alert("Login Successful!");
          console.log('Login successful', response);
          this.authService.login({username:this.loginData.username})
          form.reset();
          this.router.navigate([""]); 
        },
        (error) => {
          console.error('Login failed', error);
          alert('Invalid username or password');
        }
      );
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/user-login"]);
  }
}
