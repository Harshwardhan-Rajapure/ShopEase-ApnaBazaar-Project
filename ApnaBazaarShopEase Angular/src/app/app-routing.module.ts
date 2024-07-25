import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AdminLogicComponent } from './admin-logic/admin-logic.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
// import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {
    path:'', component:ProductsComponent
  },
  {
    path:'products', component:ProductsComponent
  },
  {
    path:'cart', component: CartComponent
  },
  {
    path:'add-product', component: AddproductComponent
  },
  {
    path:'admin-login', component: AdminLogicComponent
  },
  {
    path:'admin-dashboard', component: AdminDashboardComponent
  },
  {
    path: 'update-product/:id', component: UpdateProductComponent
  },
  {
    path: 'delete-product/:id', component: DeleteProductComponent
  },
  {
    path: 'user-login', component: UserloginComponent
  },
  {
    path: 'user-register', component: UserregisterComponent
  }
  // {
  //   path:'footer', component: FooterComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
