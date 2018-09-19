import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Availability } from '../model/availability';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EmployeeAvailabilityService {
    

  constructor(private http: HttpClient) { }
    
    /**
     * Get an employee's availabilities
     * @param : email
     */
    getEmployeeAvailability(email : string){
        return this.http.get<Availability[]>(environment.resourceServerUrl+environment.availabilityUrl + email);
    }
    
    /**
     * Save employee availabilties to database 
     * @param : Availability[], email 
     * @return : Availability[]
     */
    
    saveEmployeeAvailabilities(avail : Availability[], email : string) {
        return this.http.post(environment.resourceServerUrl+environment.availabilityUrl + email, avail);

    }
}
