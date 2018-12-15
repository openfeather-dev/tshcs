import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { JobseekersData } from'../model/jobseekers-data';
import { CellPhoneProvider } from '../model/cell-phone-provider';
import { State } from '../model/state';
import { Title } from '../model/title';
import { Status } from '../model/status';

@Injectable({
  providedIn: 'root'
})
export class MyProfileService {

 constructor(private http: HttpClient) { }
    
    saveApplication(job : JobseekersData){
        return this.http.post(environment.resourceServerUrl+environment.jobseekerUrl+"apply", job );
    }
  
    
    getAllProviders(){
        return this.http.get<CellPhoneProvider[]>(environment.resourceServerUrl+environment.cellProviderUrl);   
    }
    
    getAllUsaStates(){
            return this.http.get<State[]>(environment.resourceServerUrl+environment.usastatesUrl);
    }
    
    getTitlesByState(state : string){
     return this.http.get<Title[]>(environment.resourceServerUrl+environment.titleUrl+state);
    }
    
    getApplicantData(email : string){
        return this.http.get<JobseekersData>(environment.resourceServerUrl+environment.jobseekerUrl+email);
    }
    
    getStatus(status : string){
        return this.http.get<Status>(environment.resourceServerUrl+environment.statusUrl+status);
    }
    
    
}
