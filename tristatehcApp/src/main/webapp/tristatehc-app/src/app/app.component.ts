import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { OktaAuthService } from '@okta/okta-angular';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isAuthenticated: boolean;
  loggedInUser:string;  
  isCarousal:boolean=true;

  constructor(private oktaAuth: OktaAuthService) {
  
  // Subscribe to authentication state changes
  this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
  
  }

  async ngOnInit() {
  console.log("AuthService");
   // Get the authentication state for immediate use
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    this.oktaAuth.getUser().then(user => {
              this.loggedInUser = user.email;
          });  
      
    /*let userObj = await this.oktaAuth.getUser(); 
      this.loggedInUser= await userObj.email;
    console.log(this.isAuthenticated);*/
  }
  
     
  
}
