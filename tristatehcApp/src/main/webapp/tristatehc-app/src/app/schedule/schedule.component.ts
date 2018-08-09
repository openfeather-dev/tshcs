import { Component, OnInit } from '@angular/core';
import {ScheduleModule} from 'primeng/schedule';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {SelectItem} from 'primeng/api';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import * as moment_ from 'moment';
import { OktaAuthService } from '@okta/okta-angular';
import { ScheduleService } from './schedule.service';
import { User } from '../model/user';
import { Event } from '../model/event';
import { formatDate } from '@angular/common';

const moment = moment_;



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
isAuthenticated:boolean;
userEvents :Event[] =[]   ;
userEvent :Event;  
user:User;
display: boolean = false; 
isDeleteBtnVisible:boolean =false;   
  
 constructor(private scheduleService :ScheduleService,private oktaAuth: OktaAuthService) { 
 //Start-Dialog box for nurses
 //Todo start remove hardcoded value
    this.shifts = [{label:'1st Shift', value:'1st Shift'},{label:'2nd Shift', value:'2nd Shift'},{label:'3rd Shift', value:'3rd Shift'}];
    this.userType = "Nurse";
 //Todo end remove hardcoded value
 }
  
    
 displayAvailability: boolean = false;
 shifts:SelectItem[];
 selectedShift:string;
 userType : string;
 email:string;
  
    getEvents(){
        this.scheduleService.getUserEvents(this.email)
        .subscribe(userEvents => {
            this.userEvents = userEvents;
        //this.userEvents.push(userEvent);       
        },err => {console.log("Error occured.")
      });
    }
    
    
    saveAvailability(){
        if(this.userEvent.title){            
            for(let index = 0; index < this.userEvents.length;index++){
                console.log(this.userEvents[index].start +" "+this.userEvent.start);
                //TODO add this ccondition also
                if(this.userEvents[index].start == this.userEvent.start){
                    console.log("*********************")    
                }
                if(this.userEvents[index].title === this.userEvent.title){
                    this.userEvent.title = this.selectedShift;
                    this.userEvents[index] = this.userEvent;
                }
             } 
        }else {
            //let date : string = formatDate(this.userEvent.start,'yyyy-MM-dd','en-US','+0000');
            this.userEvent.title = this.selectedShift;
            this.userEvent.email = this.email;
            this.scheduleService.saveUserEvent(this.userEvent).subscribe(data => {
                console.log("reponse "+data);
                 // refresh the list
                 this.getEvents();
                 return true;
                },
                 error => {
                    console.error("Error saving event!!!!!");
                }
                );
            //this.userEvents.push(this.userEvent);
        }
        this.userEvent = null;
        this.displayAvailability = false;
    }
    
    deleteAvailability(){
        /*for(this.userEvents.eventId){
                if(this.userEvents[index].title === this.userEvent.title){
                    this.userEvents.splice(index,1);
                }
             }
        */
       let eventId:number =  this.userEvent.eventId;
         this.scheduleService.deleteUserEvent(eventId)
        .subscribe(userEvent => {
            console.log(userEvent);
             this.getEvents();
        //this.userEvents.push(userEvent);       
        },err => {console.log("Error occured.")
      });
       
        this.displayAvailability = false;
        
    }
    
 //End - Dialog box for nurses
    
  showDialog() {
      this.display = true;
  }
      
  
  handleEventClick(e: any){
      this.isDeleteBtnVisible = true;
      if(this.userType == "Nurse"){
          console.log("HaandleEvent"+e.calEvent.eventId);
          this.userEvent = e.calEvent;
         // this.userEvent.title = e.calEvent.title;
         this.selectedShift = e.calEvent.title;
         // this.userEvent.start = e.calEvent.start;
          this.displayAvailability = true;
      }else{
       console.log("handleeventclick " +e.calEvent.start.format());
      this.titleVal = e.calEvent.title;
      this.fromTime = e.calEvent.start.toDate();
      this.toTime = e.calEvent.end.toDate();
        this.showDialog();
      }
  }
  
  handleDayClick(e: any){
      //Handles event for Nurses
      this.isDeleteBtnVisible = false;
      if(this.userType == "Nurse"){
          this.userEvent = new Event();
          this.userEvent.start = e.date;
          this.displayAvailability = true;
          delete this.selectedShift;
      }else{
      this.clickedDate = e.date;
      
      console.log("e.view.name " +e);
      console.log("clickedDate " +this.clickedDate);
      this.showDialog();
      }
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
{    /*
    let jsonData = {title:title,start:moment(fromDate).format(),end:moment(toDate).format()};
    //JSON.parse(this.jsonData);
    jsonData["title"] = title;
    jsonData["start"] = moment(fromDate).format();
    jsonData["end"] = moment(toDate).format();
    this.events.push(jsonData);
  
     */
     this.oktaAuth.getUser().then(user => {
        this.scheduleService.addEvent(this.userEvent,user.email).subscribe(userEvent => this.events.push(userEvent));
    },(err) => {
                console.error(err);
                  });   
     
 }


  async ngOnInit() {
        if(this.oktaAuth.isAuthenticated()){
            const accessToken = this.oktaAuth.getAccessToken();
            this.oktaAuth.getUser().then(user => {
                this.email = user.email;
                this.getEvents();
          });
               
            }
      
   
      /*this.events = [
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
                     
                 ];*/
      
    
      
      this.headerConfig = {
              left: 'prev,next today',
              center: 'title',
              right: 'month,agendaWeek,agendaDay'
          };
      
         }
         
             
      
      
  }


