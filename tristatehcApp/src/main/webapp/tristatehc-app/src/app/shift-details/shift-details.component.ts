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
    actions : SelectItem[];
    selectedAction : string;
    
  constructor(private detailService:ShiftDetailsService, private router : Router) { }

  ngOnInit() {
  
  this.shiftDetailcols = [
            { field: 'shiftId', header: 'SHIFT ID' },
            { field: 'shift', header: 'YEAR' },
            { field: 'customerName', header: 'CUSTOMER NAME' },
            { field: 'comments', header: 'COMMENTS' },
            { field: 'action', header: 'ACTION' }
        ];
        
        this.shifts =  [
        {"shiftId":"1234","shift":"3-11","customerName":"Inova","comments":"sample comment","action":[]}];	
      
        this.actions = [{label:'Confirmed', value:'Confirmed'},{label:'Pending', value:'Pending'},{label:'Requested', value:'Requested'}];
  }
    
   cancel(){
       console.log("in cancel");
       this.router.navigate(['/myShifts']);
   }
  
 

}
