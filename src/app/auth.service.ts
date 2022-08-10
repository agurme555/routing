import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate,CanActivateChild {

  constructor(private common:CommonService,private router:Router) { }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   return this.canActivate(childRoute,state);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   // throw new Error('Method not implemented.');
  //session token , token expired or not // user logged in or not
  let flag = this.common.isAuthenivated();
   if(flag){
    return true ;
   }else {
    this.router.navigate(['/contact-us'])
    return false ;
   }
  }
}
