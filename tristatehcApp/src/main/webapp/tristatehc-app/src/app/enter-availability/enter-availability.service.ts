import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { UserProfile } from '../model/user-profile';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnterAvailabilityService {
    
      isDisabledSource = new Subject<boolean>();
      isDisabled = this.isDisabledSource.asObservable();
    
      isBlockedSource = new Subject<boolean>();
      isBlocked = this.isBlockedSource.asObservable();
  
    constructor(private http: HttpClient) { }

       
    disableElement(isDisabled : boolean){
        this.isDisabledSource.next(isDisabled);        
    }
    
    blockUI(isBlocked :boolean){
        this.isBlockedSource.next(isBlocked);
    }
       
    /**
     * Get all employees
     */
    getAllEmployees(){
        return this.http.get<UserProfile[]>(environment.resourceServerUrl+environment.userUrl);
    }
    
    
}
