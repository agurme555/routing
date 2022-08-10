export class Product {
 id:number;
 productName:string;
 quantity:number;
 price:number;

 constructor(id:number,productName:string,quantity:number,price:number){
     this.id = id ;
     this.productName = productName;
     this.quantity = quantity ;
     this.price = price;
 }

}