import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Availability } from '../model/availability';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAvailabilityService {
    
    availabilityUrl = 'http://localhost:8090/availability/';


  constructor(private http: HttpClient) { }
    
    /**
     * Get an employee's availabilities
     * @param : email
     */
    getEmployeeAvailability(email : string){
        console.log("EmployeeAvailabilityService");
        console.log(this.availabilityUrl + email);
        return this.http.get<Availability[]>(this.availabilityUrl + email);
    }
    
    /**
     * Save employee availabilties to database 
     * @param : Availability[], email 
     * @return : Availability[]
     */
    
    saveEmployeeAvailabilities(avail : Availability[], email : string) {
        return this.http.post(this.availabilityUrl + email, avail);

    }
}
