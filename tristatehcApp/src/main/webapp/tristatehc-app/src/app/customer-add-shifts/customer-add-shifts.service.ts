import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Title } from '../model/title';
import { ShiftConfiguration } from '../model/shift-configuration';
import { CustAddShift } from '../model/cust-add-shift';

@Injectable({
  providedIn: 'root'
})
export class CustomerAddShiftsService {

  constructor(private http: HttpClient) { }
    
    getCandiTitles(state : string){
     return this.http.get<Title[]>(environment.resourceServerUrl+environment.titleUrl+state)
    }
    
    getConfiguredShifts(clientId : string){
       return this.http.get<ShiftConfiguration[]>(environment.resourceServerUrl+environment.shiftConfigurationUrl+clientId);  
    }
    
    getShiftsForCustomer(clientId : string,date:string){
       return this.http.post<Map<string,string>>(environment.resourceServerUrl+environment.custaddShiftUrl+'shift/'+clientId,date);  
    }
    
    saveShifts(shiftData : CustAddShift){
       return this.http.post(environment.resourceServerUrl+environment.custaddShiftUrl,shiftData); 
    }
}
