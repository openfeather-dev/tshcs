import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {User} from '../model/user';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/distinctUntilChanged';
import { OktaAuthService } from '@okta/okta-angular';

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
    private currentUserSubject = new BehaviorSubject<string>("");
    public currentUser = this.currentUserSubject.asObservable();
    
    private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
    public isAuthenticated = this.isAuthenticatedSubject.asObservable();
    
    private userGroupsSubject = new BehaviorSubject<Array<string>>([]);
    public userGroups = this.userGroupsSubject.asObservable();
    
    
    constructor(private oktaAuth: OktaAuthService){}
    
    getAuthenticationStateChanges(){
    // Subscribe to authentication state groupschanges
      this.oktaAuth.$authenticationState.subscribe(
          (isAuthenticated: boolean)  => {this.isAuthenticatedSubject.next(isAuthenticated);
               
              this.oktaAuth.getUser().then(user => {
                if(this.isAuthenticated && user && user.groups){
                  let loggedInUser = user.given_name;
                   let groups = user.groups;
                    //set current user data into observable
                     this.currentUserSubject.next(loggedInUser);
                    this.userGroupsSubject.next(groups);
                     localStorage.setItem('currentUser',loggedInUser);
                    localStorage.setItem('currentUserGroups', groups.toString());       
                    
                 }
              }); 
        })    
  }
    
    setAuth(user : string, groups : Array<string>){
        //set current user data into observable
        this.currentUserSubject.next(user);
        
        localStorage.setItem('currentUser',user);
        localStorage.setItem('currentUserGroups', groups.toString());
        
    }
    
    
    getCurrentUser() : string {
        if (localStorage.getItem('currentUser')) {
             return localStorage.getItem('currentUser');
        }
        return this.currentUserSubject.value;
    }
    
    getUserGroups(){
        return localStorage.getItem('currentUserGroups');
    }
    
    clearAuth(){
        this.currentUserSubject.next("");
        this.isAuthenticatedSubject.next(false);
        this.userGroupsSubject.next([]);
        localStorage.removeItem('currentUser');
        localStorage.removeItem('currentUserGroups');
    }
     
       
          
}
