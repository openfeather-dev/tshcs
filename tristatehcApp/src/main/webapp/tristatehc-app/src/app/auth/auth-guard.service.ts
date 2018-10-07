import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
        
      
    
    

   isAuthenticated:boolean;
    constructor(public router: Router,private oktaAuth:OktaAuthService) {
        // Subscribe to authentication state changes
          this.oktaAuth.$authenticationState.subscribe(
              (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
            );
       
    }
  
    
    canActivate(): boolean {  
    this.getAuthentication();
    return this.isAuthenticated;
      
    }
    
    async getAuthentication(){
     this.isAuthenticated = await this.oktaAuth.isAuthenticated();
        if (!this.isAuthenticated) {
          this.oktaAuth.loginRedirect();
        return false;
      }
      //this.router.navigate(['/schedule']);
          
      return true;    
    }
    
    
    
}
