import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Availability } from '../model/availability';
import { UserProfile } from '../model/user-profile';

@Injectable({
  providedIn: 'root'
})
export class AvailabilityService {
    //TODO remove hard coded base url value
    baseUrl = 'http://localhost:8090/availability/';
    userBaseUrl = 'http://localhost:8090/user/';
    
  constructor(private http: HttpClient) { }
    
    /**
     * Save employee availabilties to database 
     * @param : Availability[], email 
     * @return : Availability[]
     */
    
    saveEmployeeAvailabilities(avail : Availability[], email : string) {
        return this.http.post(this.baseUrl + email, avail);

    }
    
    /**
     * Get all the saved availabilities for a specific employee from the database
     * @param : empid
     * @return : Availability[]
     */
    getEmployeeAvailabilities(email : string){
        console.log(this.baseUrl + email);
        return this.http.get<Availability[]>(this.baseUrl + email);
        
    }
    
    /**
     * Get the employee id corresponding to the email id from database
     * @param : email
     * @return : employeeId
     */
    getEmployeeId(email : string){
        return this.http.get<UserProfile>(this.userBaseUrl + email);
    }
}
