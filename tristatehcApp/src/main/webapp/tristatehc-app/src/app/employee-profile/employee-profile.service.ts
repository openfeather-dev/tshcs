import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { JobseekersData } from'../model/jobseekers-data';
import { CellPhoneProvider } from '../model/cell-phone-provider';
import { State } from '../model/state';
import { Title } from '../model/title';
import { Status } from '../model/status';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class EmployeeProfileService {

  constructor(private http: HttpClient) { }
    
    /*
     * Save employee information to database
     */
    saveApplication(job : JobseekersData){
        return this.http.post(environment.resourceServerUrl+environment.jobseekerUrl+"apply", job );
    }
  
    /*
     * Get all cell phone providers
     */
    getAllProviders(){
        return this.http.get<CellPhoneProvider[]>(environment.resourceServerUrl+environment.cellProviderUrl);   
    }
    
    /*
     * Get all usa states
     */
    getAllUsaStates(){
        return this.http.get<State[]>(environment.resourceServerUrl+environment.usastatesUrl);
    }
    
    /*
     * Get positions based on state
     */
    getTitlesByState(state : string){
        return this.http.get<Title[]>(environment.resourceServerUrl+environment.titleUrl+state);
    }
    
    /*
     * Get all statuses
     */
    getAllStatuses(){
        return this.http.get<Status[]>(environment.resourceServerUrl+environment.statusUrl);
    }
    
    /*
     * Get employee information from database
     */
    getApplicantData(email : string){
        return this.http.get<JobseekersData>(environment.resourceServerUrl+environment.jobseekerUrl+email);
    }
    
    /**
     * Get all customers
     */
    getAllCustomers(){
        return this.http.get<Customer[]>(environment.resourceServerUrl+environment.customerUrl);
    }
}
