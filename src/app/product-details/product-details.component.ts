import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productDetails:Product | undefined;
  id:number = 0;
  val1:number = 0 ;
  val2:number = 0 ;
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private common:CommonService) { }
 

  ngOnInit(): void {

    //snapshot approach
   //this.id = Number(this.activatedRoute.snapshot.paramMap.get('productId'));
   console.log('id',this.id);
   // console.log('actovated',this.activatedRoute);

    //observable approach
    this.activatedRoute.paramMap.subscribe(el => {
      this.id = Number(el.get('productId'));
      this.productDetails = this.common.getProductDetails().filter((el:Product) => (el.id == this.id))[0];
      console.log('select val', Number(el.get('productId')));
    })

    //query params retrieve
    this.val1 = Number(this.activatedRoute.snapshot.queryParamMap.get('val1'));
    console.log('snashot val1',this.val1);
    this.val1 = Number(this.activatedRoute.snapshot.queryParamMap.get('val2'));
    console.log('snapshot val2 ',this.val2);

    //query params observables approch
    this.activatedRoute.queryParamMap.subscribe(el => {
      this.val1 = Number(el.get('val1'));
      this.val2 = Number(el.get('val2'));

      console.log('observable appraoch val1  ' ,this.val1);
      console.log('observable appraoch val2  ' ,this.val2);

    })


  }

  goToNextProduct(){
    this.id = this.id + 1 ;
    //fixed parameter
   // this.router.navigate(['product-details',this.id]);

   //non mandatory parameters i.e query params
    this.router.navigate(['product-details',this.id],{queryParams:{val1:30,val2:40}});
  }

}
