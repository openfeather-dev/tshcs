import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {MessageService} from 'primeng/api';
import { environment } from '../../environments/environment';
import { AssignShift } from '../model/assign-shift';
import {SelectItem} from 'primeng/api';
import { OktaAuthService } from '@okta/okta-angular';
import {DialogModule} from 'primeng/dialog';
import { CustomerOptionsService } from '../customer-options/customer-options.service';
import { AssignShiftsService } from './assign-shifts.service';
import { AssignShiftReq } from '../model/assignshift-req';



@Component({
  selector: 'app-assign-shifts',
  templateUrl: './assign-shifts.component.html',
  styleUrls: ['./assign-shifts.component.css'],
  providers:[MessageService]
})
export class AssignShiftsComponent implements OnInit {

     availCols : any[] = [];
    names:any[];
    statuses:any[];
    titles:SelectItem[];
    shifts:SelectItem[];
    notifyNames:SelectItem[];
    changeReasons:SelectItem[];
    userAvailabilities : AssignShift[] = [];
    
    assignedShift:AssignShift = new AssignShift();
    blocked : boolean;
    showTable : boolean;
   
    radius : number;
    filteredZipcode : any[] = [];
    selectedZipcode : any = "";
    facilities: any[] = [];
    selectedFacility: string="";
    futureRadioButton :string[] = [];
    selectedFuture: string="All";
    selectedEliminateBooked : string[] = [];
    selectedEliminateBanned : string[] = [];
    selectedEliminatePending : string[] = [];
    selectedEliminateNotBeen : string[] = [];
    defaultDate: Date;
    shiftDateFrom : Date;
    shiftDateTo : Date;
    changeReason: string = ""; //city message
   
    loggedInUserEmail : string ="";
    displayDialog :boolean =false;
     displayNameChange : boolean =false;
    
    country: any;

    filteredCountriesSingle: any[];
  constructor(private messageService: MessageService,private oktaAuth: OktaAuthService,private parentService : CustomerOptionsService,private assignShiftService: AssignShiftsService) { }

  ngOnInit() {
      
      this.availCols=[
       { field: 'shiftDate', header: 'Shift Date' },
     { field: 'shiftId', header: 'Id' },
            { field: 'shiftTitleCode', header: 'Title' },
             { field: 'shiftTime', header: 'Shift' },
              { field: 'nameList', header: 'Name' },
               { field: 'status', header: 'Status' },
               { field: 'timeIn', header: 'Time In' },
                { field: 'timeOut', header: 'Time Out' },
                 { field: 'breakTime', header: 'Break' },
                  { field: 'messageCadidateList', header: 'Notify' },
                  { field: 'comments', header: 'Special Notes' },
                  { field: 'action', header: 'Action' }
            
                                                           
          
          ];

      this.names=[{label:'Kurian', value:"Kurian"},{label:"Sneha", value:"Sneha"}];
      this.changeReasons=[{label:'Select', value:"Select"},{label:'Person is not available', value:"Person is not available"},{label:"Person was wrongly allocated", value:"Person was wrongly allocated"}];
      this.titles=[{label:'CNA', value:"CNA"},{label:"RN", value:"RN"}];
      this.shifts=[{label:'7-3', value:"7-3"},{label:"5-11", value:"5-11"}];
      this.notifyNames=[{label:'Harinder', value:"Harinder"},{label:"Loyola", value:"Loyola"},{label:'Kurian', value:"Kurian"},{label:"Sneha", value:"Sneha"}];
      this.statuses=[{label:'Confirmed', value:"Confirmed"},{label:"Pending", value:"Pending"}];
      /* this.userAvailabilities=[{
         'shiftDate': new Date("12/29/2018"),  
        'id':'1212',
        'title':['RN'],
        'shift':['5-11'],
        'name':["Kurian"],
        'status':["Confirmed"],
         'timeIn':new Date("12/29/2018"),
        'timeOut':new Date("12/29/2018"),
        'breakTime':new Date("12/29/2018"),
        'notify':['Kurian'],
        'specialNotes':'I am not available',
        'action':'save'
        },
           {
        'shiftDate':new Date("12/29/2018"), 
        'id':'12222',
        'title':['CNA'],
        'shift':['7-3'],
        'name':["Sneha"],
        'status':["Pending"],
        'timeIn':new Date("12/29/2018"),
        'timeOut':new Date("12/29/2018"),
        'breakTime':new Date("12/29/2018"),
        'notify':['Sneha'],
        'specialNotes':'I am okk to go',
        'action':'remove'
        }];
      */
      
       this.getAllAssignedShifts();
  }
    
    getAllAvailabilities(){
       
    }
    
    search(){
        }
    
    filteredZipcodes(event){
        
    }
    
     clear(){
         
     }
    
    /**
     * Method to inform parent component to enable its buttons
     */
    cancel(){
        this.parentService.enableButton(true);
    }
    
    showDialogToAdd(){
        this.displayDialog=true;
    }
    save(){
        let  addedAssignShift:AssignShift = new AssignShift();
        /* addedAssignShift.shiftDate= this.assignedShift.shiftDate;
        addedAssignShift.shiftId = this.assignedShift.id;
        addedAssignShift.title = this.assignedShift.title;
        
        addedAssignShift.shift = this.assignedShift.shift;
        addedAssignShift.name = this.assignedShift.name;
        addedAssignShift.status = this.assignedShift.status;
        addedAssignShift.timeIn = this.assignedShift.timeIn;
        addedAssignShift.timeOut = this.assignedShift.timeOut;
        addedAssignShift.breakTime = this.assignedShift.breakTime;
        addedAssignShift.notify = this.assignedShift.notify;
        addedAssignShift.specialNotes = this.assignedShift.specialNotes;
        addedAssignShift.action = this.assignedShift.action;
        
        
        
    shiftId:string;
    custid:string;
    shiftTitleCode:string[];
    shiftTime:string[];
    
    nameList:string[];
    status:string[];
    timeIn:Date;
    timeOut:Date;
    
     fut1:string;
     fut2:string;
    
    breakTime:Date;
    
    messageCadidateList:string[];
    comments:string;
    action:string;
    */
        this.userAvailabilities.push(addedAssignShift);
        this.displayDialog=false;
        
    }
    
    nameChanged(event:Event){
 //  console.log("name changed--->"+event.value); 
        this.displayNameChange=true;
          
    
    }
    
    saveReason(){
    console.log(this.changeReason);
        this.displayNameChange=false;
        this.changeReason="Select";  
    }
getAllAssignedShifts(){
    let  assignShiftRequest : AssignShiftReq = new AssignShiftReq();
    assignShiftRequest.customer = 'MENJ853';
    
    assignShiftRequest.email='';
    assignShiftRequest.shiftDate='';
     assignShiftRequest.fromSearchDate='';
     assignShiftRequest.toSearchDate='';
     assignShiftRequest.searchFuture1='';
     assignShiftRequest.searchFuture2='';
     assignShiftRequest.searchFuture3='';
     assignShiftRequest.searchFuture4='';
     assignShiftRequest.searchFuture5='';
     assignShiftRequest.searchFuture6='';
     assignShiftRequest.searchFutureList='';
      
    
    this.assignShiftService.getAllAssignedShifts(assignShiftRequest).subscribe(assignedShifts => {
        //console.log("assignedShifts  -------->"+JSON.stringify(assignedShifts));
        
          assignedShifts.forEach(assignshiftObj =>{
              this.userAvailabilities.push(assignshiftObj);
              console.log("assignshiftObj  "+JSON.stringify(assignshiftObj));
          } );
                  
        });
 // this.userAvailabilities = this.assignShiftService.getAllAssignedShifts(assignShiftRequest);

}
    
}
