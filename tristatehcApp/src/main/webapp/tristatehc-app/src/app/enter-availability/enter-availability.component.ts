import { Component, OnInit, ChangeDetectionStrategy ,Input, Output, EventEmitter} from '@angular/core';
import {CalendarEvent} from 'angular-calendar';

@Component({
  selector: 'app-enter-availability',
  templateUrl: './enter-availability.component.html',
  styleUrls: ['./enter-availability.component.css']
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnterAvailabilityComponent implements OnInit {
        
    users:any[];
    cols:any[];
   
    constructor() { 

    }
        ngOnInit() {
        this.users = [{username:'Sneha'},{username:'Kurian'}];
         this.cols = [
            { field: 'username', header: 'User Name' }
        ];
        
        
        
    }
    clickedDate: Date;
    
    selectedShifts : string[] = [];
    selectedAllShifts : string[] = [];
    comments : Map<any,any> = new Map<any,any>();
    view: string = 'month';

    viewDate: Date = new Date();

    events: CalendarEvent[] = [
    {
      title: 'Has custom class',
      start: new Date(),
      meta: {
        id: 1,
         selectedShifts : [],   
      }
    }
  ];
    
    
    selectAll(shift1:string,shift2:string,shift3:string,all:string){
        if(this.selectedAllShifts.includes(all)){
             this.selectedShifts.push(shift1,shift2,shift3);
        }
        
       
    }
    
    dayClicked(event:Event){
        
        console.log(this.selectedAllShifts);
        console.log(this.selectedShifts);
        }

}
