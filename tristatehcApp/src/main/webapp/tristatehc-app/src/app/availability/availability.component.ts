import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CheckboxModule} from 'primeng/checkbox';

@Component({
    selector: 'app-availability',
    templateUrl: './availability.component.html',
    styleUrls: ['./availability.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvailabilityComponent implements OnInit {

    constructor() { }
    
      colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

    ngOnInit() {
    }
    clickedDate: Date;
    
    selectedShifts : string[] = [];
    selectedAllShifts : string[] = [];
    comments : Map<string,string> = new Map<string,string>();
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
