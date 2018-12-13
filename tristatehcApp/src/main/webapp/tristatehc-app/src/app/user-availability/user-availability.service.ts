import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { UserAvailability } from '../model/user-availability';
import { SearchCriteriaUserAvailability } from '../model/search-criteria-user-availability';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Customer } from '../model/customer';
import { Zipcode } from '../model/zipcode';


@Injectable({
  providedIn: 'root'
})
export class UserAvailabilityService {

  constructor(private http: HttpClient) { }
    
     /**
     * Get all employee availabilities
     * 
     */
    getAllAvailabilities(searchCriteria : SearchCriteriaUserAvailability) : Observable<any> {
        return this.http.post(environment.resourceServerUrl+environment.userAvailabilities+"search/", searchCriteria);
    }
    
    /**
     * Get all customers
     */
    getAllCustomers(){
        return this.http.get<Customer[]>(environment.resourceServerUrl+environment.customerUrl);
    }
    
    /**
     * Get all zipcodes
     */
    getAllZipcodes(query : any){
        return this.http.get<Zipcode[]>(environment.resourceServerUrl+environment.zipcodeUrl+query);
    }
    
}
