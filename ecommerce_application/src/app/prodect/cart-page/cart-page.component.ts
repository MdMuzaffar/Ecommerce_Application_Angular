import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { product } from '../productmodel';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
showProduct:any = [];
totalamount:number = 0;
constructor(private api:ApiService) {
 
}
  ngOnInit(): void {
    this.api.product().subscribe(data => {
      this.showProduct = data;
      console.log(this.showProduct)
    })
    this.totalamount = this.api.calculateprice();
  }

  deleteItem(product:product){
    this.api.removeitem(product);
  }

  // totalamount(){
  //   this.api.calculateprice().subscribe((res)=> {})
  // }
}
