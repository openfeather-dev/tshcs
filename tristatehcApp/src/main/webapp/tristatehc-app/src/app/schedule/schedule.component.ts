import { Component, OnInit } from '@angular/core';
import {ScheduleModule} from 'primeng/schedule';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
//import * as Moment from 'moment';



@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']

})
export class ScheduleComponent implements OnInit {

events: any[];
headerConfig: any;
titleVal: string;
fromTime: Date;
clickedDate :any;
toTime: Date;
  
  constructor() { }
  
  display: boolean = false;

  showDialog() {
      this.display = true;
  }
      
  
  handleEventClick(e: any){
      
      console.log("handleeventclick " +e.calEvent.start.format());
      this.titleVal = e.calEvent.title;
      this.fromTime = e.calEvent.start.toDate();
      this.toTime = e.calEvent.end.toDate();
      this.showDialog();
  }
  
  handleDayClick(e: any){
     
      this.clickedDate = e.date;
      
      console.log("e.view.name " +e);
      console.log("clickedDate " +this.clickedDate);
      this.showDialog();
  }
  
  handleSave(fc: any){
      console.log("titleVal "+this.titleVal);
      let fromDate :Date =  new Date();
      let toDate :Date =  new Date();
      fromDate.setDate(this.clickedDate.toDate().getDate());
      toDate.setDate(this.clickedDate.toDate().getDate());
      fromDate.setHours(this.fromTime.getHours(), this.fromTime.getMinutes(), this.fromTime.getSeconds(), this.fromTime.getMilliseconds());
      toDate.setHours(this.toTime.getHours(), this.toTime.getMinutes(), this.toTime.getSeconds(), this.toTime.getMilliseconds());
      console.log("fromDate "+fromDate);
      console.log("toDate "+toDate);
      console.log("fc" +fc.getDate());
      //event.title =
      this.addNewEvent(this.titleVal, fromDate, toDate);
      //fc.updateEvent(event);
      this.display = false;
  }
  
handleUpdate(e){
      
  }


 addNewEvent(title:string,fromDate:Date,toDate:Date)
{
    //let jsonData = {title:title,start:moment(fromDate).format(),end:moment(toDate).format()};
    //JSON.parse(this.jsonData);
    //jsonData["title"] = title;
    //jsonData["start"] = moment(fromDate).format();
    //jsonData["end"] = moment(toDate).format();
    //this.events.push(jsonData);
 }


  ngOnInit() {
      this.events = [
                     {
                         "title": "All Day Event",
                         "start": "2018-07-15"
                     },
                     {
                         "title": "Long Event",
                         "start": "2018-07-11",
                         "end": "2018-07-15"
                     },
                     {
                         "title": "Repeating Event",
                         "start": "2018-01-09T16:00:00"
                     },
                     {
                         "title": "Repeating Event",
                         "start": "2018-01-16T16:00:00"
                     },
                     {
                         "title": "Conference",
                         "start": "2018-07-11",
                         "end": "2018-07-13"
                     }
                 ];
      
      
      this.headerConfig = {
              left: 'prev,next today',
              center: 'title',
              right: 'month,agendaWeek,agendaDay'
          };
      
         }
             
      
      
  }


