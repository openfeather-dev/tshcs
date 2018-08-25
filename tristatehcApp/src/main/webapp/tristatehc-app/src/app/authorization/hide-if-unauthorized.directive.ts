import { Directive, ElementRef, OnInit, Input } from '@angular/core';
import { AuthorizationService } from './authorization.service';
import { OktaAuthService } from '@okta/okta-angular';
import { AuthService } from '../auth/auth.service';

@Directive({
    selector: '[appHideIfUnauthorized]'
})
export class HideIfUnauthorizedDirective implements OnInit {
    @Input('appHideIfUnauthorized') groups: Array<string>;
    user:any;
    userGroups:any;
    isAuthenticated :boolean;


    constructor(private el: ElementRef, private authService: AuthorizationService, private oktaAuth: OktaAuthService, private auth: AuthService) { 
    
    this.getAuthenticationStateChanges();
    }

    async ngOnInit() {
        console.log("******HideIfUnauthorizedDirective******");
        this.isAuthenticated = await this.oktaAuth.isAuthenticated();
        if(this.isAuthenticated){
            
        this.user = await this.oktaAuth.getUser(); 
        this.userGroups = this.user.groups;
            console.log(this.userGroups);
        
            
                if (this.isAuthenticated && this.userGroups.length > 0) {
                    if (this.authService.isAuthorizedUser(this.groups, this.userGroups)) {
                        //console.log("HideIfUnauthorizedDirective inside subscribe"+this.groups);
                        this.el.nativeElement.style.display = 'block';
                    } else {
                        this.el.nativeElement.style.display = 'none';
                    }
                } else {
                    this.el.nativeElement.style.display = 'none';
                }
        
        
        }else{
            
            this.el.nativeElement.style.display = 'none';
        }
        
         
    }
    
    
     getAuthenticationStateChanges(){
    // Subscribe to authentication state changes
      this.oktaAuth.$authenticationState.subscribe(
          (isAuthenticated: boolean)  => {
              console.log("state changed-----");
               if(isAuthenticated){
                   
                   this.oktaAuth.getUser().then(user => {
                   this.userGroups = user.groups;
                   if (this.authService.isAuthorizedUser(this.groups, this.userGroups)) {
                        //console.log("HideIfUnauthorizedDirective inside subscribe"+this.groups);
                        this.el.nativeElement.style.display = 'block';
                    } else {
                        this.el.nativeElement.style.display = 'none';
                    }    
                  console.log("authentication state change in directive "+this.userGroups);
              }); 
               }else{
               console.log("logged out");   
                   this.el.nativeElement.style.display = 'none'; 
               
               }
              
        })    
  }



}
