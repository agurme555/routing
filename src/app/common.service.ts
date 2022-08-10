import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { ProductsComponent } from './products/products.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  getProductDetails(){
    let product= [
      new Product(1,'mobile',1,20000),
      new Product(2,'laptop',1,30000),
      new Product(3,'iphone',1,30000),
      new Product(4,'ipad',1,5000)
    ];

    return product;
  }


  isAuthenivated(){
    // logic whether user is authenicated or not
    //localStrogae.
   let  isLoggedUser = false ;

  //  setTimeout(() => {
  //   isLoggedUser = false ;
  //   console.log("set time out excuted");
  //  }, 10000);
    
    return isLoggedUser ;
  }

}
