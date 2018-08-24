import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserProfile} from '../model/user-profile';

@Injectable({
  providedIn: 'root'
})
export class EnterAvailabilityService {

  
      baseUrl = 'http://localhost:8090/user/';

    constructor(private http: HttpClient) { }

    /**
     * Method to get all user events from rest api
     */
    getUserProfile(email: string) {
        return this.http.get<UserProfile[]>(this.baseUrl + email);
    }
  
}
