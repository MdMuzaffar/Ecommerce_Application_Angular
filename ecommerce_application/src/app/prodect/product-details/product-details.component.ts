import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { product } from '../productmodel';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  productdata:any | product;
  showadd: boolean= true;
  showremove: boolean= false
  constructor(private apiService : ApiService , private activatedRoute: ActivatedRoute , private route:Router ){}
  ngOnInit(): void {
    let productid = this.activatedRoute.snapshot.paramMap.get('productid') ?? 'defaultProductId';
    console.log('product id is : ' , productid)

    productid && this.apiService.getproductbyid(productid).subscribe((res)=>{
      this.productdata = res;
      console.log(' Muzaffar',this.productdata)
    })
  }

  addtocart(productdata:product){
    this.showadd = false;
    this.showremove = true;
    this.apiService.addtocart(productdata)
  }
  showremoves(productdata:product){
    this.showadd = true;
    this.showremove = false
    this.apiService.removeitem(productdata)
  }

  

}
