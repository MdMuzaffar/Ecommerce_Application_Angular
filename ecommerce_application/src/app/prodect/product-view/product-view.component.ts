import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { product } from '../productmodel';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit{
  productData?:any | product[];

  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.displayProducts()
  }

  displayProducts(){
    this.api.getProduct().subscribe((res)=> {
      this.productData = res;
      console.log(this.productData);
    })
  }

  addtocart(item:product){
    this.api.addtocart(item);
  }

}
