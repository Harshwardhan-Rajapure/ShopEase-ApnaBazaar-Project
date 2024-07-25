import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  constructor(private apiService: ApiService) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.apiService.addProduct(form.value).subscribe(
        (response) => {
          alert('Product added successfully !!');
          console.log('Product added successfully', response);
          form.reset();
        },
        (error) => {
          console.error('Error adding product', error);
        }
      );
    }
  }
}
