import { Directive, ElementRef, OnInit , Input } from '@angular/core';
import { AuthorizationService } from './authorization.service';
import { OktaAuthService } from '@okta/okta-angular';

@Directive({
  selector: '[appHideIfUnauthorized]'
})
export class HideIfUnauthorizedDirective implements OnInit {
        @Input('appHideIfUnauthorized') groups : Array<string>;
        

  constructor(private el: ElementRef, private authService : AuthorizationService,private oktaAuth: OktaAuthService) { }
    
    ngOnInit() {
        if(localStorage.getItem('currentUserGroups')){
         //console.log("HideIfUnauthorizedDirective  init----->"+localStorage.getItem('currentUserGroups'));
            let userGroups = localStorage.getItem('currentUserGroups');
            let userArray = new Array(userGroups);
            console.log(userArray.length);
             if (!this.authService.isAuthorizedUser(this.groups,userArray)) {
                        //console.log("HideIfUnauthorizedDirective inside subscribe"+this.groups);
                        this.el.nativeElement.style.display = 'none';
        }else{
                 this.el.nativeElement.style.display = 'block';
             }
        }
       
         
        
        this.oktaAuth.$authenticationState.subscribe(
          (isAuthenticated: boolean)  => {
               
              this.oktaAuth.getUser().then(user => {
                if(user && user.groups){
                    if (!this.authService.isAuthorizedUser(this.groups,user.groups)) {
                        //console.log("HideIfUnauthorizedDirective inside subscribe"+this.groups);
                        this.el.nativeElement.style.display = 'none';
        }
                    
                 }
              }); 
        }) 
           
    }
    

}
