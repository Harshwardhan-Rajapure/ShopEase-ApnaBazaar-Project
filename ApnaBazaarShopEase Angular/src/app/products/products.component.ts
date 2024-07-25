import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { CartService } from 'src/app/cart.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productList : any ;
  public filterCategory : any
  searchKey:string ="";
  constructor(private api : ApiService, private cartService : CartService,
                public authService: AuthService,private router: Router) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe((res: any)=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
        if(a.category ==="women's clothing" || a.category ==="men's clothing"){
          a.category ="fashion"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList)
    });

    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
      this.filterProducts();

    })
  }

  addtocart(item: any){
    if (this.authService.isLoggedIn()) {
      this.cartService.addtoCart(item);
    } else {
      this.router.navigate(['/user-login']);
    }  }
    
  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

  filterProducts() {
    this.filterCategory = this.productList.filter((product: any) =>
      product.title.toLowerCase().includes(this.searchKey.toLowerCase()) ||
      product.category.toLowerCase().includes(this.searchKey.toLowerCase())
    );
  }

}
