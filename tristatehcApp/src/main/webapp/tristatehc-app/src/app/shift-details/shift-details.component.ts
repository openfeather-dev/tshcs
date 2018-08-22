import { Component, OnInit } from '@angular/core';
import { ShiftDetailsService } from '../shift-details/shift-details.service';
import { Shift } from '../model/shift';

@Component({
  selector: 'app-shift-details',
  templateUrl: './shift-details.component.html',
  styleUrls: ['./shift-details.component.css']
})
export class ShiftDetailsComponent implements OnInit {


	shifts: Shift[];
	 
	 
    shiftDetailcols: any[];
  constructor(private detailService:ShiftDetailsService) { }

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
  }
  
 

}
