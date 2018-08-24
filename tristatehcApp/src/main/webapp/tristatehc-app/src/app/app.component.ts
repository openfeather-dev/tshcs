import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import { AuthorizationService } from './authorization/authorization.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'app';
  isAuthenticated: boolean;
  loggedInUser:string;  
  groups: Array<string>;
    
  constructor(private oktaAuth: OktaAuthService, private authorizeService : AuthorizationService) {
       this.getAuthenticationStateChanges();
  }
    
      
  getAuthenticationStateChanges(){
    // Subscribe to authentication state changes
      this.oktaAuth.$authenticationState.subscribe(
          (isAuthenticated: boolean)  => {this.isAuthenticated = isAuthenticated;
               
              this.oktaAuth.getUser().then(user => {
                console.log(user);
                if(user && user.groups){
                  this.loggedInUser = user.given_name;
                   this.groups = Array.from(user.groups);
                    this.authorizeService.initializeUserGroups(this.groups);
                    localStorage.setItem('currentUser',user.given_name);
                    localStorage.setItem('currentUserGroups',Array.from(user.groups).toString());
                    
                 }
                console.log(this.loggedInUser);
              }); 
        })    
  }

  async ngOnInit() {
  console.log("AuthService");
   // Get the authentication state for immediate use
    this.isAuthenticated = await this.oktaAuth.isAuthenticated(); 
  
          
      
    /*let userObj = await this.oktaAuth.getUser(); 
      this.loggedInUser= await userObj.email;
    console.log(this.isAuthenticated);*/
  }
  
    logout(){
        this.loggedInUser = '';
        this.oktaAuth.logout();
     }
         
  
}
