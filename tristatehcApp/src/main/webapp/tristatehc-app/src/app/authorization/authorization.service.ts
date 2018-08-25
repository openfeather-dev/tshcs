import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
        
  constructor() { }
    
    isAuthorizedUser(authGroups : Array<string>, userGroups : Array<string>){
        //console.log("in AuthorizationService isAuthorizedUser() "+ authGroups +" user grops  "+userGroups);
        console.log(userGroups.some(group=> authGroups.indexOf(group) >= 0));
        
        //let userGroupsArray = userGroups[0].split(',');

         if(authGroups && userGroups && userGroups.some(group=> authGroups.indexOf(group) >= 0)){
           console.log("returning true.......................");
            return true;
        }else{
             console.log("returning false.......................");
         return false;
         }
        
        }
    
    
    initializeUserGroups(groups : Array<string>){
       //this.userGroups = groups;
    }
    
  
    
        
}
