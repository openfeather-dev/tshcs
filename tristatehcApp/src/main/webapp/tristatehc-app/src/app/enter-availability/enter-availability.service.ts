import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { UserAvailability } from '../model/user-availability';
import { UserProfile } from '../model/user-profile';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnterAvailabilityService {
    
      isDisabledSource = new Subject<boolean>();
      isDisabled = this.isDisabledSource.asObservable();
  
    constructor(private http: HttpClient) { }

       
    disableElement(isDisabled : boolean){
        this.isDisabledSource.next(isDisabled);        
    }
    
    /**
     * Get all employee availabilities
     */
    getAllAvailabilities(){
        return this.http.get<UserAvailability[]>(environment.resourceServerUrl+environment.userAvailabilities);
    }
    
    /**
     * Get all employees
     */
    getAllEmployees(){
        return this.http.get<UserProfile[]>(environment.resourceServerUrl+environment.userUrl);
    }
    
    
}
