import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { product } from '../productmodel';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  productdata:any | product;
  constructor(private apiService : ApiService , private activatedRoute: ActivatedRoute ){}
  ngOnInit(): void {
    let productid = this.activatedRoute.snapshot.paramMap.get('productid');
    console.log('product id is : ' , productid)

    productid && this.apiService.getproductbyid(productid).subscribe((res)=>{
      this.productdata = res;
      console.log(this.productdata)
    })
  }
}
