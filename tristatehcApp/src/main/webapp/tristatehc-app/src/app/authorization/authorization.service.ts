import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
        
  constructor() { }
    
    isAuthorizedUser(authGroups : Array<string>, userGroups : Array<string>){
        
        //let userGroupsArray = userGroups[0].split(',');

         if(authGroups && userGroups && userGroups.some(group=> authGroups.indexOf(group) >= 0)){
            return true;
        }else{
         return false;
         }
        
        }
    
    
    initializeUserGroups(groups : Array<string>){
       //this.userGroups = groups;
    }
    
  
    
        
}
