import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductViewComponent } from './prodect/product-view/product-view.component';
import { ProductDetailsComponent } from './prodect/product-details/product-details.component';
import { CartPageComponent } from './prodect/cart-page/cart-page.component';

const routes: Routes = [
  {path:'', component:ProductViewComponent},
  {path:'product-detail/:productid' , component:ProductDetailsComponent},
  {path:'cart-item', component:CartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
