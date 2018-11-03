import { Component, OnInit } from '@angular/core';
import { ShiftDetailsService } from '../shift-details/shift-details.service';
import { Shift } from '../model/shift';
import {SelectItem} from 'primeng/api';
import { Router} from '@angular/router';

@Component({
  selector: 'app-shift-details',
  templateUrl: './shift-details.component.html',
  styleUrls: ['./shift-details.component.css']
})
export class ShiftDetailsComponent implements OnInit {


	shifts: Shift[];
	 
    shiftDetailcols: any[];
    myRequest : SelectItem[];
    selectedAction : string;
    color:string;
    
  constructor(private detailService:ShiftDetailsService, private router : Router) { }

  ngOnInit() {
  this.color = "red";
  
  this.shiftDetailcols = [
            { field: 'shiftId', header: 'SHIFT ID' },
            { field: 'client', header: 'CLIENT' },
            { field: 'shiftDate', header: 'SHIFT DATE' },
            { field: 'shiftTime', header: 'SHIFT TIME' },
            { field: 'agencyStatus', header: 'AGENCY STATUS' },
            { field: 'finalStatus', header: 'FINAL STATUS' },
            { field: 'timeIn', header: 'TIME IN' },
            { field: 'timeOut', header: 'TIME OUT' },
            { field: 'breakTime', header: 'BREAK TIME' },
            { field: 'customerName', header: 'CUSTOMER NAME' },
            { field: 'supervisorName', header: 'SUPERVISOR NAME' },
            { field: 'timeSheet', header: 'TIMESHEET' },
            { field: 'shiftStatus', header: 'SHIFT STATUS' },
            { field: 'myRequest', header: 'MY REQUEST' }
        ];
            
     
        this.shifts =  [{"shiftId":"1234","shiftId_color":"gray","client":"1health tc","client_color":"orange","shiftDate":"10/21/1987","shiftDate_color":"blue","shiftTime":"7-3","shiftTime_color":"red","agencyStatus":"available","agencyStatus_color":"orange","finalStatus":"going","finalStatus_color":"blue","timeIn":"3-11","timeIn_color":"green","timeOut":"3-11","timeOut_color":"","breakTime":"3-11","breakTime_color":"green", "customerName":"Inova","customerName_color":"","supervisorName":"3-11","supervisorName_color":"","timeSheet":"3-11","timeSheet_color":"","shiftStatus":"3-11","shiftStatus_color":"red","myRequest":[]}];	
       this.myRequest = [{label:'Book Me', value:'BookMe'},{label:'Cancelling', value:'Cancelling'},{label:'Reject Shift', value:'RejectShift'}];
      
        
  }
    
   cancel(){
       this.router.navigate(['/myshifts']);
   }
  
 

}
