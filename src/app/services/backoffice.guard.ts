import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class BackofficeGuard implements CanActivate {

  constructor(private accountService: AccountService, private router: Router) {}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = window.localStorage.getItem('token');
    const tokenInfo = this.accountService.getDecodedAccessToken(token);
    if(tokenInfo.nif === '999999999') {
      return true;
    } else {
      this.router.navigate(['/error']);
      return false;
    }
  }
  
}
