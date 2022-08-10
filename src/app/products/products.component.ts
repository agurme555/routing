import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:Product[] = [] ;
  constructor(private common:CommonService) { }

  ngOnInit(): void {
    this.products = this.common.getProductDetails();
  }

}
