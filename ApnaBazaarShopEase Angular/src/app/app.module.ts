import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import { CartComponent } from './cart/cart.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from './carousel/carousel.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AdminLogicComponent } from './admin-logic/admin-logic.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    HeaderComponent,
    ProductsComponent,
    FilterPipe,
    CartComponent,
    CarouselComponent,
    AddproductComponent,
    AdminLogicComponent,
    AdminDashboardComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    UserloginComponent,
    UserregisterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
