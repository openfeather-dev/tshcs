import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {MessageService} from 'primeng/api';
import { environment } from '../../environments/environment';
import { UserAvailability } from '../model/user-availability';
import {SelectItem} from 'primeng/api';
import { OktaAuthService } from '@okta/okta-angular';


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
    userAvailabilities : any[] = [];
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
    
    country: any;

    filteredCountriesSingle: any[];
  constructor(private messageService: MessageService,private oktaAuth: OktaAuthService) { }

  ngOnInit() {
      
      this.availCols=[
     { field: 'id', header: 'Id' },
            { field: 'title', header: 'Title' },
             { field: 'shift', header: 'Shift' },
              { field: 'name', header: 'Name' },
               { field: 'status', header: 'Status' },
               { field: 'timeIn', header: 'Time In' },
                { field: 'timeOut', header: 'Time Out' },
                 { field: 'break', header: 'Break' },
                  { field: 'notfiy', header: 'Notfiy' },
                  { field: 'specialNotes', header: 'Special Notes' },
                  { field: 'action', header: 'Action' }
            
                                                           
          
          ];

      this.names=[{label:'Kurian', value:"Kurian"},{label:"Sneha", value:"Sneha"}];
       this.userAvailabilities=[{
        'id':'1212',
        'title':'RN',
        'shift':'7-3',
        'name':"kurian",
        'status':"<span class='label label-success'>confirmed</span>",
        'timeIn':'asdasd',
        'timeOut':'asdasd',
        'break':'asdasd',
        'notfiy':'notified',
        'specialNotes':'I am not available',
        'action':'save'
        },
           {
        'id':'12222',
        'title':'LPN',
        'shift':'7-3',
        'name':"sneha",
        'status':"<span class='label label-danger'>pending</span>",
        'timeIn':'12:23',
        'timeOut':'asdasd',
        'break':'asdasd',
        'notfiy':'notified',
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

}
