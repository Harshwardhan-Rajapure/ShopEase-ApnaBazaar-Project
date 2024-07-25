import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {
  public productId: number = 0; // Ensure `productId` is of type `number`
  public product: any = {
    title: '',
    description: '',
    price: 0,
    category: '',
    image: ''
  };
  public errorMessage: string | null = null;
  public showDeleteOptions: boolean = false;
  public showConfirmation: boolean = false;

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
          this.showDeleteOptions = true;
          this.showConfirmation = false;
        },
        error => {
          this.errorMessage = 'Product not found';
        }
      );
    }
  }

  showDeleteConfirmation(): void {
    this.showConfirmation = true;
  }

  confirmDelete(): void {
    this.deleteProduct();
  }

  cancelDelete(): void {
    this.resetForm();
  }

  deleteProduct(): void {
    if (this.productId) {
      this.apiService.deleteProduct(this.productId).subscribe(
        () => {
          alert('Product deleted successfully!');
          this.router.navigate(['/admin-dashboard']);
        },
        error => {
          this.errorMessage = 'Error deleting product';
        }
      );
    }
  }

  resetForm(): void {
    this.productId = 0;
    this.product = {
      title: '',
      description: '',
      price: 0,
      category: '',
      image: ''
    };
    this.showDeleteOptions = false;
    this.showConfirmation = false;
  }
}
