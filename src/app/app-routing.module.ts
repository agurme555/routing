import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './auth.service';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  
  {path:"home", component:HomeComponent},
  {path:"contact-us",component:ContactUsComponent},

  // {path:"products",component:ProductsComponent},
  // {path:'product-details/:productId',component:ProductDetailsComponent},

   //using Authguard
  {path:"products",component:ProductsComponent , canActivate:[AuthService]},
  {path:'product-details/:productId',component:ProductDetailsComponent},

  // canActicateChild for nested routes
  {path:"products",component:ProductsComponent ,canActivateChild:[AuthService],children:[
    {path:'product-details/:productId',component:ProductDetailsComponent},
    {path:"product-category",component:ProductCategoryComponent}
  ]},
  {path:'', redirectTo:"/home",pathMatch:'full'},
  {path:'**', component:ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
