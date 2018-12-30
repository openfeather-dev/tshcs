import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {MessageService} from 'primeng/api';
import { environment } from '../../environments/environment';
import { AssignShift } from '../model/assign-shift';
import {SelectItem} from 'primeng/api';
import { OktaAuthService } from '@okta/okta-angular';
import {DialogModule} from 'primeng/dialog';





@Component({
  selector: 'app-assign-shifts',
  templateUrl: './assign-shifts.component.html',
  styleUrls: ['./assign-shifts.component.css'],
  providers:[MessageService],
  encapsulation: ViewEncapsulation.None
})
export class AssignShiftsComponent implements OnInit {

     availCols : any[] = [];
    names:any[];
    statuses:any[];
    notifyNames:SelectItem[];
    userAvailabilities : AssignShift[] = [];
    
    assignedShift:AssignShift = new AssignShift();
    blocked : boolean;
    showTable : boolean;
    maxRadius : number;
    radius : number;
    filteredZipcode : any[] = [];
    selectedZipcode : any = "";
    facilities: any[] = [];
    selectedFacility: string="";
    selectedShift7To3 :string[] = [];
    selectedShift3To11 : string[] = [];
    selectedShift11To7: string[] = [];
    selectedShiftOther: string[] = [];
    selectedTitle: string="All";
    selectedEliminateBooked : string[] = [];
    selectedEliminateBanned : string[] = [];
    selectedEliminatePending : string[] = [];
    selectedEliminateNotBeen : string[] = [];
    defaultDate: Date;
    shiftDateFrom : Date;
    shiftDateTo : Date;
    msgs: string = ""; //city message
    loggedInUserEmail : string ="";
    displayDialog :boolean =false;
    
    country: any;

    filteredCountriesSingle: any[];
  constructor(private messageService: MessageService,private oktaAuth: OktaAuthService) { }

  ngOnInit() {
      
      this.availCols=[
       { field: 'shiftDate', header: 'Shift Date' },
     { field: 'id', header: 'Id' },
            { field: 'title', header: 'Title' },
             { field: 'shift', header: 'Shift' },
              { field: 'name', header: 'Name' },
               { field: 'status', header: 'Status' },
               { field: 'timeIn', header: 'Time In' },
                { field: 'timeOut', header: 'Time Out' },
                 { field: 'breakTime', header: 'Break' },
                  { field: 'notfiy', header: 'Notfiy' },
                  { field: 'specialNotes', header: 'Special Notes' },
                  { field: 'action', header: 'Action' }
            
                                                           
          
          ];

      this.names=[{label:'Kurian', value:"Kurian"},{label:"Sneha", value:"Sneha"}];
      this.notifyNames=[{label:'Harinder', value:"Harinder"},{label:"Loyola", value:"Loyola"},{label:'Kurian', value:"Kurian"},{label:"Sneha", value:"Sneha"}];
      this.statuses=[{label:'Confirmed', value:"Confirmed"},{label:"Pending", value:"Pending"}];
       this.userAvailabilities=[{
         'shiftDate': new Date("12/29/2018"),  
        'id':'1212',
        'title':'RN',
        'shift':'7-3',
        'name':"kurian",
        'status':"<span class='label label-success'>confirmed</span>",
         'timeIn':new Date("12/29/2018"),
        'timeOut':new Date("12/29/2018"),
        'breakTime':new Date("12/29/2018"),
        'notfiy':['Kurian'],
        'specialNotes':'I am not available',
        'action':'save'
        },
           {
        'shiftDate':new Date("12/29/2018"), 
        'id':'12222',
        'title':'LPN',
        'shift':'7-3',
        'name':"sneha",
        'status':"<span class='label label-danger'>pending</span>",
        'timeIn':new Date("12/29/2018"),
        'timeOut':new Date("12/29/2018"),
        'breakTime':new Date("12/29/2018"),
        'notfiy':['Sneha'],
        'specialNotes':'I am okk to go',
        'action':'remove'
        }];
  }
    getAllAvailabilities(){
       
    }
    
    search(){
        }
    
    filteredZipcodes(event){
        
    }
    
     clear(){
         
     }
    
    showDialogToAdd(){
        this.displayDialog=true;
    }
    save(){
        let  addedAssignShift:AssignShift = new AssignShift();
         addedAssignShift.shiftDate= this.assignedShift.shiftDate;
        addedAssignShift.id = this.assignedShift.id;
        addedAssignShift.title = this.assignedShift.title;
        
        addedAssignShift.shift = this.assignedShift.shift;
        addedAssignShift.name = this.assignedShift.name;
        addedAssignShift.status = this.assignedShift.status;
        addedAssignShift.timeIn = this.assignedShift.timeIn;
        addedAssignShift.timeOut = this.assignedShift.timeOut;
        addedAssignShift.breakTime = this.assignedShift.breakTime;
        addedAssignShift.notfiy = this.assignedShift.notify;
        addedAssignShift.specialNotes = this.assignedShift.specialNotes;
        addedAssignShift.action = this.assignedShift.action;
      
    
        this.userAvailabilities.push(addedAssignShift);
        this.displayDialog=false;
        
    }

}
