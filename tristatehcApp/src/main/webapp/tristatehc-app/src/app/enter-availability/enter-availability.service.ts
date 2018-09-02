import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserProfile} from '../model/user-profile';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnterAvailabilityService {
    
      isDisabledSource = new Subject<boolean>();
      isDisabled = this.isDisabledSource.asObservable();
  
      baseUrl = 'http://localhost:8090/user/';

    constructor(private http: HttpClient) { }

    /**
     * Method to get all user events from rest api
     */
    getUserProfile(email: string) {
        return this.http.get<UserProfile[]>(this.baseUrl + email);
    }
    
    disableElement(isDisabled : boolean){
        this.isDisabledSource.next(isDisabled);        
    }
  
}
