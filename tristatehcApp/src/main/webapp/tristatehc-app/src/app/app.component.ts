import { Component,OnInit,ChangeDetectorRef,ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import { AuthorizationService } from './authorization/authorization.service';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  isAuthenticated: boolean;
  loggedInUser:string;  
  groups: Array<string>;
    
  constructor(private oktaAuth: OktaAuthService, private authorizeService : AuthorizationService, private authService : AuthService) {
      
       this.getAuthenticationStateChanges();
  }
    
      
  getAuthenticationStateChanges(){
    // Subscribe to authentication state changes
      this.oktaAuth.$authenticationState.subscribe(
          (isAuthenticated: boolean)  => {this.isAuthenticated = isAuthenticated;
               
              this.oktaAuth.getUser().then(user => {
                console.log(user);
                if(this.isAuthenticated && user && user.groups){
                  this.loggedInUser = user.given_name;
                   this.groups = user.groups;
                    this.authService.setAuth(this.loggedInUser,this.groups);
                    
                    
                 }
                console.log(this.loggedInUser);
              }); 
        })    
  }

  async ngOnInit() {
  console.log("appcomponent");
      
     // this.login();
   // Get the authentication state for immediate use
       
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
      if(this.isAuthenticated){
          
          this.oktaAuth.getUser().then(user => {
            this.loggedInUser  = user.given_name  ;
      
      });
      
      }else{
          this.oktaAuth.loginRedirect();
      }
       
     
  }

    login(){
        this.oktaAuth.loginRedirect();
    }
  
    logout(){
       // this.authService.clearAuth();
        this.isAuthenticated=false;
        this.loggedInUser = '';
        this.oktaAuth.logout();
     }
         
  
}
