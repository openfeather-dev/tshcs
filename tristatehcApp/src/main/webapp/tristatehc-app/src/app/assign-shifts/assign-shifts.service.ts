import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { AssignShift } from '../model/assign-shift';
import { AssignShiftReq } from '../model/assignshift-req';
import { CreateAssignShiftReq } from '../model/create-assign-shift';


@Injectable({
  providedIn: 'root'
})
export class AssignShiftsService {

  constructor(private http: HttpClient) { }
    
    
      
    /**
     * Get all assigned shifts
     */
    getAllAssignedShifts(assignShiftRequest:AssignShiftReq){
        
         return this.http.post<AssignShift[]>(environment.resourceServerUrl+environment.assignShiftUrl,assignShiftRequest); 
    }
    
    /**
     * Get new value for assigned shift
     */
    getNewAssignedShiftValue(assignShiftRequest:AssignShiftReq){
        
         return this.http.post<AssignShift>(environment.resourceServerUrl+environment.newValueForassignShift,assignShiftRequest); 
    }
    
    /**
     * Get all assigned shifts
     */
    newAssignment(newAssignShift:CreateAssignShiftReq){
        
         return this.http.post<AssignShift[]>(environment.resourceServerUrl+environment.createAssignShift,newAssignShift); 
    }
    
}
