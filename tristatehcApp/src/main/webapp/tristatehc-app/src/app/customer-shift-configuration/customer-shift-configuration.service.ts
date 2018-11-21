import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ShiftConfiguration } from '../model/shift-configuration';

@Injectable({
  providedIn: 'root'
})
export class CustomerShiftConfigurationService {

  constructor(private http: HttpClient) { }
    
  getCustomerShiftConfig(clientId : string){
    return this.http.get<ShiftConfiguration[]>(environment.resourceServerUrl+environment.shiftConfigurationUrl+clientId);
  }
   
  saveCustomerShiftConfig(clientId : string, shifts : ShiftConfiguration[]){
     return this.http.post(environment.resourceServerUrl+environment.shiftConfigurationUrl+clientId,shifts); 
  }
    
}
