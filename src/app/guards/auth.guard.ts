import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SignService } from '../service/rest-api/sign.service';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate{

    constructor(private router: Router, private signServcie: SignService){}

    canActivate(next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
            if(this.signServcie.isSignIn()){
                return true;
            }
            else{
                this.router.navigate(['/signin'], {queryParams: { redirectTo: state.url}});
                return false;
            }
        }
        
    
}