import { Component,ChangeDetectionStrategy, OnInit } from '@angular/core';
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
     
    isDeleteBtnVisible:boolean = false;
    displayAvailability: boolean = false;
    shifts:SelectItem[];
    selectedShift:string;
    email:string;
    isDropDwnVisible:boolean = false;
    users:SelectItem[];
    usersList:Array<any>;
    selectedUser:string;
    datesMorning:string[];
    datesAfternoon:string[];
    datesNight:string[];  
     
  
    constructor(private scheduleService :ScheduleService,private oktaAuth: OktaAuthService) { 
    
    //TODO start remove hard coded value
        this.shifts = [{label:'1st Shift', value:'1st Shift'},{label:'2nd Shift', value:'2nd Shift'},{label:'3rd Shift', value:'3rd Shift'}];
        this.users = [{label:'snehazacharia@gmail.com', value:'Sneha'}];
             
        
    //Todo end remove hardcoded value
    }
    
    //TODO remove
    saveDates(){
        console.log("****Dates selected*****"+this.datesMorning.length);
       if(this.datesMorning.length > 0){
           for(let index = 0; index< this.datesMorning.length;index++){
            this.userEvent = new Event();
            this.userEvent.title = "7-3";
            this.userEvent.start = this.datesMorning[index];
            this.userEvents.push(this.userEvent);
           }
       }
        if(this.datesAfternoon.length > 0){
            for(let index = 0; index< this.datesAfternoon.length;index++){
            this.userEvent = new Event();
            this.userEvent.title = "3-11";
            this.userEvent.start = this.datesAfternoon[index];
            this.userEvents.push(this.userEvent);
           }
        }
        
        if(this.datesNight.length > 0){
            for(let index = 0; index< this.datesNight.length;index++){
            this.userEvent = new Event();
            this.userEvent.title = "11-7    ";
            this.userEvent.start = this.datesNight[index];
            this.userEvents.push(this.userEvent);
           }
        }
       else{
           console.log(this.datesNight); 
        
        }
        
    }
    
    getEvents(){
        this.scheduleService.getUserEvents(this.email)
        .subscribe(userEvents => {
            this.userEvents = userEvents;
         },err => {console.log("Error occured.")
      });
    }
    
    /**
     * Method called when user saves/updates an event
     */
    
    saveAvailability(){
        //Update an event
        if(this.userEvent.eventId){            
                this.userEvent.title = this.selectedShift;
                //Update database
            let updatedObj = this.getNewEventObject(this.userEvent);
            
            console.log("json --->" +JSON.stringify(updatedObj));
                this.scheduleService.updateUserEvent(updatedObj).subscribe(data =>{
                    
                    this.getEvents();
                    
                    },error => {
                        console.error("Error updating event!!!!!"+error);
                    });
        }else {
            //Save an event
            //let date : string = formatDate(this.userEvent.start,'yyyy-MM-dd','en-US','+0000');
            this.userEvent.title = this.selectedShift;
            this.userEvent.email = this.email;
            //Save to database
            this.scheduleService.saveUserEvent(this.userEvent).subscribe(data => {
               //Save to local list
                this.userEvents.push(<Event>data);
               },
                 error => {
                    console.error("Error saving event!!!!!");
                });
        }
        this.userEvent = null;
        this.displayAvailability = false;
    }
    
    /**
     * Method  called when user wants to delete an event
     */
    deleteAvailability(){
       let eventId:number =  this.userEvent.eventId;
         this.scheduleService.deleteUserEvent(eventId)
        .subscribe(userEvent => {
            this.getEvents();
         },err => {
             console.log("Error occured.")
      });
       
       this.displayAvailability = false;
        
     }
    
         
   /**
    * Method called when the user clicks the event
    */
    handleEventClick(event: any){
      this.isDeleteBtnVisible = true;
       
      //If the user is a nurse
      if(this.email == "snehazacharia@gmail.com"){
         
         this.userEvent = event.calEvent;
         console.log("event ==>" +this.userEvent.eventId);
        this.selectedShift = event.calEvent.title;
        this.displayAvailability = true;
      }else{
         console.log("handleeventclick " +event.calEvent.start.format());
         this.titleVal = event.calEvent.title;
         this.fromTime = event.calEvent.start.toDate();
         this.toTime = event.calEvent.end.toDate();
         this.display = true; 
      }
    }
  
    /**
     * Method called when the user clicks on a day on the schedule calendar 
     */
    
      handleDayClick(event: any){
      this.isDeleteBtnVisible = false;
      this.userEvent = new Event();
      this.userEvent.start = event.date;
      
        //If the user is a admin
      if(this.email == "openfeather@hotmail.com"){
         this.display = true; 
         this.isDropDwnVisible = false;          
          
      }else if(this.email == "snehazacharia@gmail.com"){
          
          this.displayAvailability = true;
          delete this.selectedShift;

      }
    }
    
    onChange(event:any){
        this.isDropDwnVisible = true;
        /*this.scheduleService.getUsers(this.userEvent.start, ).subscribe(data => {
            this.usersList = data.users;
            this.users = [];
            for(var i = 0; i < this.usersList.length; i++) {
                   this.users.push({label: this.usersList[i], value: this.usersList[i]});
               }
            });*/
    }
    
    /**
     * Method to save/update an event created by admin
     */
    saveEvent(){
        //save an event
        this.userEvent.title = this.titleVal;
        this.userEvent.email = this.email;
        /*//Save to database
         this.scheduleService.saveUserEvent(this.userEvent).subscribe(data => {
             //Save to local list
             this.userEvents.push(<Event>data);
             },
             error => {
                    console.error("Error saving event!!!!!");
             });*/
        this.userEvents.push(this.userEvent);
        this.userEvent = null;
        this.display = false;
    }  
    
    
  
  /*handleSave(fc: any){
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
  }*/
  

 /*addNewEvent(title:string,fromDate:Date,toDate:Date)
{    /*
    let jsonData = {title:title,start:moment(fromDate).format(),end:moment(toDate).format()};
    //JSON.parse(this.jsonData);
    jsonData["title"] = title;
    jsonData["start"] = moment(fromDate).format();
    jsonData["end"] = moment(toDate).format();
    this.events.push(jsonData);
  
    
     this.oktaAuth.getUser().then(user => {
        this.scheduleService.addEvent(this.userEvent,user.email).subscribe(userEvent => this.events.push(userEvent));
    },(err) => {
                console.error(err);
                  });   
     
 }*/

    getNewEventObject(event:Event){
        let updatedObj:Event = new Event(); 
            updatedObj.title = event.title;
             updatedObj.email = event.email;
             updatedObj.eventId =event.eventId;
            updatedObj.start = event.start;
            return updatedObj;
    }

    async ngOnInit() {
      //Allow only authenticated users to access schedule
      if(this.oktaAuth.isAuthenticated()){
          //const accessToken = this.oktaAuth.getAccessToken();
          this.oktaAuth.getUser().then(user => {
              this.email = user.email;
              //call existing events for logged in user
              this.getEvents();
          });
               
      }
       
           
      this.headerConfig = {
         left: 'prev,next today',
         center: 'title',
         right: 'month,agendaWeek,agendaDay'
      };
      
    }
        
      
  }


