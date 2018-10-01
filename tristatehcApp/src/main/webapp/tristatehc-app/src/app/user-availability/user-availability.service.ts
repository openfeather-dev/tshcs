import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { UserAvailability } from '../model/user-availability';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserAvailabilityService {

  constructor(private http: HttpClient) { }
    
     /**
     * Get all employee availabilities
     */
    getAllAvailabilities(){
        return this.http.get<UserAvailability[]>(environment.resourceServerUrl+environment.userAvailabilities);
    }
    
}
