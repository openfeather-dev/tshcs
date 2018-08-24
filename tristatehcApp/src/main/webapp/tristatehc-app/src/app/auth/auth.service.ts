import { Injectable } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
        
    /*public isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        // Check whether the token is expired and return
        // true or false
        if(sessionStorage.getItem('isAuthenticated')){
            return true;
        }
        return false;
      }*/
    currentUser : string;
    
    constructor(private oktaAuth: OktaAuthService){}
    
   
    setCurrentUser() {
        this.oktaAuth.getUser().then(user => {
        console.log("hahaah"+user);
        if(user && user.groups){
            this.currentUser = user.given_name;
            localStorage.setItem('currentUser',user.given_name);
            localStorage.setItem('currentUserGroups',Array.from(user.groups).toString());
            
         }else{
            localStorage.removeItem('currentUser');
            localStorage.removeItem('currentUserGroups'); 
        }
      }); 
        
            
    }
    
       
          
}
