import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent {

  user = {
    name: '',
    email: '',
    mobileno: '',
    address: '',
    password: '',
    terms: false
  };

  constructor(private userService: UserService,
                private router: Router) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.userService.register(form.value).subscribe(
        (response)=>{
      alert("Registered Successfully !!");
      console.log('Registered successfully', response);
          form.reset();
          this.router.navigate(["user-login"])

        },
        (error) => {
          console.error('Error adding product', error);
        }
      );
    }
  }
}
