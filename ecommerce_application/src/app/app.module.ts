import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http' ; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductViewComponent } from './prodect/product-view/product-view.component';
import { ProductDetailsComponent } from './prodect/product-details/product-details.component';
import { HeaderComponent } from './prodect/header/header.component';
import { CartPageComponent } from './prdect/cart-page/cart-page.component';
import { CartProductComponent } from './prodect/cart-product/cart-product.component';

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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
