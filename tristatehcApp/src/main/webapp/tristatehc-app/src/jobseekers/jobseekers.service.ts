import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';
import { JobseekersData } from'../app/model/jobseekers-data';

@Injectable({
  providedIn: 'root'
})
export class JobseekersService {

  constructor(private http: HttpClient) { }
    
 /* saveApplication(payLoad : any){
    return this.http.post(environment.resourceServerUrl+environment.jobseekerUrl, payLoad );
  }*/
    
    saveApplication(job : JobseekersData){
        return this.http.post(environment.resourceServerUrl+environment.jobseekerUrl+"apply", job );
  }
  
    getApp(){
     return this.http.get(environment.resourceServerUrl+"job/getapp");   
    }
  
}
