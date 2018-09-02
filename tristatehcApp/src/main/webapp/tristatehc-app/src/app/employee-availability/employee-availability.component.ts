import { Component, OnInit,Input,EventEmitter,Output  } from '@angular/core';
import {CalendarEvent} from 'angular-calendar';
import { EnterAvailabilityService } from '../enter-availability/enter-availability.service';
import { UserProfile} from '../model/user-profile';

@Component({
  selector: 'app-employee-availability',
  templateUrl: './employee-availability.component.html',
  styleUrls: ['./employee-availability.component.css']
})
export class EmployeeAvailabilityComponent implements OnInit {

    selectedShifts : string[] = [];
    selectedAllShifts : string[] = [];
    comments : Map<any,any> = new Map<any,any>();
    view: string = 'month';
    clickedDate: Date;
    events: CalendarEvent[];
    

  viewDate: Date = new Date();
  constructor(private availablility:EnterAvailabilityService) { }
    

  ngOnInit() {
      this.availablility.disableElement(true);
      
       this.events = [
    {
      title: 'Has custom class',
      start: new Date(),
      meta: {
        id: 1,
         selectedShifts : [],   
      }
    }
  ];
      
  }
    
    cancel(){
       this.availablility.disableElement(false); 
    }
    
  

}
