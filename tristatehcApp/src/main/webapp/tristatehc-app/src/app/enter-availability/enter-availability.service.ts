import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Availability } from '../model/availability';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnterAvailabilityService {
    
      isDisabledSource = new Subject<boolean>();
      isDisabled = this.isDisabledSource.asObservable();
  
      baseUrl = 'http://localhost:8090/availability/';

    constructor(private http: HttpClient) { }

       
    disableElement(isDisabled : boolean){
        this.isDisabledSource.next(isDisabled);        
    }
    
    /**
     * Get all employee availabilities from rest api
     */
    getAvailabilities(){
        return this.http.get<Availability[]>(this.baseUrl+"getAll");
    }
}
