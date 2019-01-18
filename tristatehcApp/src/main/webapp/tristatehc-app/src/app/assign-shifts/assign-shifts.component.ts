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
import { ActivatedRoute } from '@angular/router';
import { CreateAssignShiftReq } from '../model/create-assign-shift';


@Component({
  selector: 'app-assign-shifts',
  templateUrl: './assign-shifts.component.html',
  styleUrls: ['./assign-shifts.component.css'],
  providers:[MessageService]
})
export class AssignShiftsComponent implements OnInit {

     availCols : any[] = [];
    names:SelectItem[];
    unFormattedNames:any[];
    statuses:any[];
    titles:SelectItem[];
    shifts:SelectItem[];
    notifyNames:SelectItem[];
    unFormattedNotifyNames:any[];
    changeReasons:SelectItem[];
    userAvailabilities : AssignShift[] = [];
    custId:string;
    assignedShift:AssignShift = new AssignShift();
    createdAssignedShift:CreateAssignShiftReq;
    blocked : boolean;
    showTable : boolean;
   
    selectedName : SelectItem;
    selectedStatus:SelectItem;
    selectedTitle:SelectItem;
    selectedShiftTime:SelectItem;
    selectedNotifiedName:SelectItem;
   
    defaultDate: Date;
    shiftDateFrom : Date;
    shiftDateTo : Date;
    changeReason: string = ""; //city message
   
    loggedInUserEmail : string ="";
    displayDialog :boolean =false;
     displayNameChange : boolean =false;
    
    country: any;

    filteredCountriesSingle: any[];
  constructor(private route : ActivatedRoute,private oktaAuth: OktaAuthService,private parentService : CustomerOptionsService,private assignShiftService: AssignShiftsService) { }

  ngOnInit() {
         this.custId = this.route.snapshot.paramMap.get('clientId');
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

      this.changeReasons=[{label:'Select', value:"Select"},{label:'Person is not available', value:"Person is not available"},{label:"Person was wrongly allocated", value:"Person was wrongly allocated"}];
      
      
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
        this.getNewAssignedShiftDefaults();
        
    }
    save(){
        let  addedAssignShift:AssignShift = new AssignShift();
         addedAssignShift.shiftDate= this.assignedShift.shiftDate;
        addedAssignShift.shiftId = this.assignedShift.shiftId;
        ;
        
       
        
        console.log("this.assignedShift.shiftTitleCode "+this.assignedShift.shiftTitleCode);
        
       
        
        this.createdAssignedShift = new CreateAssignShiftReq();
        this.createdAssignedShift.shiftId = this.assignedShift.shiftId;
         this.createdAssignedShift.custid=this.custId;
        this.createdAssignedShift.email = "";
       this.createdAssignedShift.shiftDate =this.assignedShift.shiftDate;
      this.createdAssignedShift.shiftTitleCode=this.selectedTitle;
       this.createdAssignedShift.shiftTime=this.selectedShiftTime;
           this.createdAssignedShift.nameList= this.selectedName;
           this.createdAssignedShift.status=this.selectedStatus;
           this.createdAssignedShift.timeIn=this.assignedShift.timeIn;
           this.createdAssignedShift.timeOut=this.assignedShift.timeOut;
           this.createdAssignedShift.breakTime=this.assignedShift.breakTime;
         this.createdAssignedShift.fut1="reason for changing new name";
         this.createdAssignedShift.fut2="";
         this.createdAssignedShift.messageCadidateList=this.selectedNotifiedName;
        this.createdAssignedShift.comments=this.assignedShift.comments;
        this.createdAssignedShift.action="create";
        
 
        console.log();
        /*
        addedAssignShift.shift = this.assignedShift.shift;
        addedAssignShift.name = this.assignedShift.name;
        addedAssignShift.status = this.assignedShift.status;
        addedAssignShift.timeIn = this.assignedShift.timeIn;
        addedAssignShift.timeOut = this.assignedShift.timeOut;
        addedAssignShift.breakTime = this.assignedShift.breakTime;
        addedAssignShift.notify = this.assignedShift.notify;
        addedAssignShift.specialNotes = this.assignedShift.specialNotes;
        addedAssignShift.action = this.assignedShift.action;
        */
        
    
    
        //this.userAvailabilities.push(addedAssignShift);
       // console.log(this.selectedName);
         //console.log("this.assignedShift "+JSON.stringify(this.assignedShift) );
        
        this.displayDialog=false;
        this.userAvailabilities=[];
        
        this.assignShiftService.newAssignment(this.createdAssignedShift).subscribe(assignedShifts => {
        
          assignedShifts.forEach(assignshiftObj =>{
              this.userAvailabilities.push(assignshiftObj);
          } );
                  
        });
        this.getAllAssignedShifts();
        
    }
    
    nameChanged(event:Event){
 //  console.log("name changed--->"+event.value); 
        this.displayNameChange=true;
          
    
    }
    
    saveReason(){
   // console.log(this.changeReason);
        this.displayNameChange=false;
        this.changeReason="Select";  
    }
getAllAssignedShifts(){
    let  assignShiftRequest : AssignShiftReq = new AssignShiftReq();
    assignShiftRequest.customer =  this.custId;
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
        
          assignedShifts.forEach(assignshiftObj =>{
              this.userAvailabilities.push(assignshiftObj);
          } );
                  
        });

}
    
    getNewAssignedShiftDefaults(){
    let  assignShiftRequest : AssignShiftReq = new AssignShiftReq();
    assignShiftRequest.customer =  this.custId;
    assignShiftRequest.email='';
    
    
    this.assignShiftService.getNewAssignedShiftValue(assignShiftRequest).subscribe(newAssignedShiftDefault => {
        console.log("newAssignedShiftDefault  ----------->"+newAssignedShiftDefault);
        //this.populateFormattedNames(this.selectedName);
        this.unFormattedNames=newAssignedShiftDefault.nameList;
        this.unFormattedNotifyNames = newAssignedShiftDefault.messageCadidateList;
        this.assignedShift= newAssignedShiftDefault;
                  
        });

}
    
    onTitleChange(event : Event){
       // console.log("event "+event);
        this.populateFormattedNames(event);
    
    }
    
    populateFormattedNames(title:any){
        let filteredNames : SelectItem[] = [{label:'Select', value:"Select"}];
        this.unFormattedNames.forEach(function (object) {
        if(object.value.includes(title)){
             //console.log(object.value);
            let filteredString = object.value.split("*");
            let filteredName = {label:filteredString[1], value:filteredString[1]};
        filteredNames.push(filteredName);
            
        }
           });
        
        let filteredNotifiedNames : SelectItem[] = [{label:'Select', value:"Select"}];
        this.unFormattedNotifyNames.forEach(function (object) {
        if(object.value.includes(title)){
            // console.log(object.value);
            let filteredString = object.value.split("*");
            let filteredName = {label:filteredString[1], value:filteredString[1]};
        filteredNotifiedNames.push(filteredName);
            
        }
           });
        
       this.names=filteredNames;
       this.notifyNames =filteredNotifiedNames ;
        
        console.log(this.selectedName);
    }
    
}
