import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http' ; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductViewComponent } from './prodect/product-view/product-view.component';
import { ProductDetailsComponent } from './prodect/product-details/product-details.component';
import { HeaderComponent } from './prodect/header/header.component';
import { CartPageComponent } from './prodect/cart-page/cart-page.component';
// import {  } from './prdect/cart-page/CartProductComponent';
import { CartProductComponent } from './prodect/cart-product/cart-product.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ProductViewComponent,
    ProductDetailsComponent,
    HeaderComponent,
    CartPageComponent,
    CartProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
