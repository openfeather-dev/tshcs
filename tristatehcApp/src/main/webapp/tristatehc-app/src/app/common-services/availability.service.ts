import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Availability } from '../model/availability';
import { UserProfile } from '../model/user-profile';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {
    
  constructor(private http: HttpClient) { }
    
    /**
     * Save employee availabilties to database 
     * @param : Availability[], email 
     * @return : Availability[]
     */
    
    saveEmployeeAvailabilities(avail : Availability[], email : string) {
        return this.http.post(environment.resourceServerUrl+environment.availabilityUrl + email, avail);

    }
    
    /**
     * Get all the saved availabilities for a specific employee from the database
     * @param : empid
     * @return : Availability[]
     */
    getEmployeeAvailabilities(email : string){
        return this.http.get<Availability[]>(environment.resourceServerUrl+environment.availabilityUrl + email);
        
    }
    
    /**
     * Get the employee id corresponding to the email id from database
     * @param : email
     * @return : employeeId
     */
    getEmployeeId(email : string){
        return this.http.get<UserProfile>(environment.resourceServerUrl+environment.userUrl + email);
    }
}
