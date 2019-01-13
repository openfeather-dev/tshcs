import { Component, OnInit,ViewEncapsulation,ChangeDetectorRef} from '@angular/core';
import { CustomerOptionsService } from '../customer-options/customer-options.service';
import {SelectItem} from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { CustomerAddShiftsService } from './customer-add-shifts.service';
import { CustAddShift } from '../model/cust-add-shift';
import { OktaAuthService } from '@okta/okta-angular';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-customer-add-shifts',
  templateUrl: './customer-add-shifts.component.html',
  styleUrls: ['./customer-add-shifts.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CustomerAddShiftsComponent implements OnInit {
  shifts : Map<string, string> = new Map<string,string>();
  configuredShifts : any;
  employeeType : SelectItem[];
  selectedEmployee : string = "";
  state: string;
  clientId :string;
  blocked : boolean;
  disabled : boolean;
  count:number;
  disableTitleDropdown : boolean;
  comments : Map<string, string> = new Map<string,string>();
  loggedInUser : string = "";
    
  view: string = 'week';
  viewDate: Date = new Date();
    
  constructor(private parentService : CustomerOptionsService,private route : ActivatedRoute, private service:CustomerAddShiftsService,private oktaAuth: OktaAuthService,private messageService: MessageService,private changeDetector: ChangeDetectorRef) { }

  async ngOnInit() {
      this.state = this.route.snapshot.paramMap.get('state');
      this.clientId = this.route.snapshot.paramMap.get('clientid');
      this.blocked = true;
      this.disabled = true;
      //this.getAllShifts();
      this.getTitles();
      
      this.getConfiguredShifts();
      let isAuthenticated = await this.oktaAuth.isAuthenticated();
            if(isAuthenticated){
                  this.oktaAuth.getUser().then(user => {
                    this.loggedInUser  = user.preferred_username;
              });
            
           } 
      /**this.shifts = ["RN":{
                            "10/28/2018":{
                            "6:00-14:00":{
                            employeeCount:2,
                            assignedCount:1,
                            unassignedCount:4,
                            comment:"hi there"
                            
                            
                            },
                            "14:00-22:00":{
                            employeeCount:3,
                            assignedCount:3,
                            unassignedCount:9,
                            comment:"welcome"
                            
                            
                            }
                            
                            
                            }

        }]**/
      /*
      this.shifts.set("RN11/10/20186:00-14:00","3");
      this.shifts.set("RN10/29/20186:00-14:00","5");
      this.shifts.set("RN11/02/20186:00-14:00","10");
      this.shifts.set("LPN11/28/20186:00-14:00","10");
      
      */
   this.disableTitleDropdown = false;   
  }
    /**
     * Method to inform parent component to enable its buttons.
     */
    cancel(){
        this.parentService.enableButton(true);
    }
    
    getAllShifts(){
        this.blocked = true; 
        let today = new Date();
        this.service.getShiftsForCustomer(this.clientId,(today.getMonth()+1)+"/"+today.getDate()+"/"+today.getFullYear()).subscribe(shiftmap => {
           //this.shifts = shiftmap;
            
           this.shifts =  new Map(Object.entries(shiftmap));
        });
        this.blocked = false; 
    
    }
    getTitles(){
        this.employeeType = [{label:"Select", value:""}];
        this.service.getCandiTitles(this.state).subscribe(titles => {
           titles.forEach(title => {
               this.employeeType.push({label:title.title, value:title.title});
           }); 
        });
    }
    
    getConfiguredShifts(){
       //this.getAllShifts(); 
       this.configuredShifts = [];
       this.service.getConfiguredShifts(this.clientId).subscribe(shifts => {
            shifts.forEach(shift =>{
                //shift.comment ="Hello";
               this.configuredShifts.push(shift); 
            });
           this.blocked = false;
        });
               
    }
    
    enableSave(){
        if(this.selectedEmployee !== "" && this.configuredShifts.length > 0) {
            this.disableTitleDropdown = true;
            this.changeDetector.detectChanges();
            this.getAllShifts();
            this.disabled = false;
        }else{
            this.disabled = true;
        }
    }
    
    
    onSave(){
        let shiftData : CustAddShift = new CustAddShift();
        shiftData.adminEmail = this.loggedInUser;
        shiftData.customerId = this.clientId;
        shiftData.assignedCount = 0;
        shiftData.unassignedCount = 0;
        shiftData.shifts = this.jsMapToObj(this.shifts);
        shiftData.comment = this.jsMapToObj(this.comments);
        console.log("shiftData  "+shiftData);
        this.service.saveShifts(shiftData).subscribe(data=>{
            this.messageService.add({severity:'success', summary: 'Saved', detail:'Data was successfully saved'});
        },error =>{
            this.messageService.add({severity:'error', summary: 'Error', detail:'Data could not saved'});
        }) ;
        
    }
    
    
    jsMapToObj(strMap) {
     let map:{ [name: string]: string }={};
        
        strMap.forEach((value: string, key: string) => {
            map[key] = value;
        });
    return map;
}

    dateChanged(date:Date){
      /*this.blocked = true; 
        let today = date;
        this.service.getShiftsForCustomer(this.clientId,(today.getMonth()+1)+"/"+today.getDate()+"/"+today.getFullYear()).subscribe(shiftmap => {
           //this.shifts = shiftmap;
            console.log("dateChanged --->" +shiftmap);
           this.shifts =  new Map(Object.entries(shiftmap));
           this.changeDetector.detectChanges();
        });
        this.blocked = false;*/
    this.changeDetector.detectChanges();
       
    }
   

}
