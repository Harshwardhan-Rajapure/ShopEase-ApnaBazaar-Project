import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  public productId: number = 0; // Ensure `productId` is of type `number`
  public product: any = {
    title: '',
    description: '',
    price: 0,
    category: '',
    image: ''
  };
  public errorMessage: string | null = null;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = +params['id']; 
      this.onSearchProduct();
    });
  }

  onSearchProduct(): void {
    if (this.productId) {
      this.apiService.getProductById(this.productId).subscribe(
        (product: any) => {
          this.product = product;
        },
        error => {
          this.errorMessage = 'Product not found';
        }
      );
    }
  }

  onSubmit(form: NgForm): void {
    if (form.valid && this.productId) {
      this.apiService.updateProduct(this.productId, this.product).subscribe(
        () => {
          alert('Product updated successfully!');
          this.router.navigate(['/admin-dashboard']);
        },
        error => {
          this.errorMessage = 'Error updating product';
        }
      );
    }
  }
}
