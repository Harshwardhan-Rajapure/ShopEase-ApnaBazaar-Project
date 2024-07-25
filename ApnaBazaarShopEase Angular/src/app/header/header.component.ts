import { Component, OnInit } from '@angular/core';
import {faCartShopping, faSearch} from '@fortawesome/free-solid-svg-icons'
import { CartService } from '../cart.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss',]
})
export class HeaderComponent implements OnInit {
  

  carticon=faCartShopping;
  searchicon=faSearch;

    title='Apna-Bazaar';
    showLogin:boolean=false;
    
  public totalItem : number = 0;
  public searchTerm !: string;

  constructor(private cartService : CartService,
              public authService: AuthService,private router: Router) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
