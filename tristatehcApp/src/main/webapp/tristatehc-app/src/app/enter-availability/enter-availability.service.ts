import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { UserAvailability } from '../model/user-availability';
import { UserProfile } from '../model/user-profile';

@Injectable({
  providedIn: 'root'
})
export class EnterAvailabilityService {
    
      isDisabledSource = new Subject<boolean>();
      isDisabled = this.isDisabledSource.asObservable();
  
      baseUrl = 'http://localhost:8090/useravailability/';
      userUrl = 'http://localhost:8090/user/';

    constructor(private http: HttpClient) { }

       
    disableElement(isDisabled : boolean){
        this.isDisabledSource.next(isDisabled);        
    }
    
    /**
     * Get all employee availabilities
     */
    getAllAvailabilities(){
        return this.http.get<UserAvailability[]>(this.baseUrl);
    }
    
    /**
     * Get all employees
     */
    getAllEmployees(){
        return this.http.get<UserProfile[]>(this.userUrl);
    }
    
    
}
