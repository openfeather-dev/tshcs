import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CheckboxModule} from 'primeng/checkbox';
import { AvailabilityService } from '../common-services/availability.service';
import { Availability } from '../model/availability';
import { OktaAuthService } from '@okta/okta-angular';
import {Message} from 'primeng/components/common/api';

@Component({
    selector: 'app-availability',
    templateUrl: './availability.component.html',
    styleUrls: ['./availability.component.css'],
    changeDetection: ChangeDetectionStrategy.Default
})
export class AvailabilityComponent implements OnInit {
    
    selectedShifts : string[] = [];
    selectedAllShifts : string[] = [];
    comments : Map<string,string> = new Map<string,string>();
    //comments : any[] = [];
    view: string = 'month';

    viewDate: Date = new Date();
    availability : Availability;
    email : string;
    isAuthenticated : boolean;
    checked : boolean = false;
    msgs : Message[];
    employeeId : string;
    blocked: boolean = true;
    
    
    constructor(private serviceAvailabilty : AvailabilityService, private oktaAuth: OktaAuthService) {
           
    }
    
    async ngOnInit() {
        
      //this.comments = [{"10/03/2018" : "sneha"},{"10/04/2018" : "mary"}];  
        
        
      this.msgs = [];
      this.isAuthenticated = await this.oktaAuth.isAuthenticated();
      if(this.isAuthenticated){
          
          this.oktaAuth.getUser().then(user => {
            this.email = user.preferred_username;
            this.getEmployeeId(this.email);
               this.blocked = false;
      });
      
      }
       
       
    }

        
    /**
     * Store an employee's availabilities to database
     * @param : void
     * @return : void
     */
    save(){
       
       let availabilities : Availability[]=[];
       this.selectedShifts.forEach(shift => {
           let avail : Availability;
           avail = new Availability();
           avail.empId = this.employeeId;
           avail.enterBySource = "Employee";
           avail.enterTime = new Date();
           let tempVal = shift.split(":");
           avail.availDate = tempVal[0];
           avail.availTime = tempVal[1];
           this.comments.forEach((value: string, key: string) => {
                avail.availComments = this.comments.get(avail.availDate);
             });
           availabilities.push(avail);
       })
       this.serviceAvailabilty.saveEmployeeAvailabilities(availabilities, this.email).subscribe(
       data => {
           this.msgs = [];
           this.msgs.push({severity:'success', summary:'Saved : ', detail:'Availability was successfully saved'});
       },error =>{
          this.msgs = [];
           this.msgs.push({severity:'error', summary:'Error : ', detail:'Availability could not be saved'}); 
       }); 
    }
    
    /**
     * Get an employee's availabilities using emloyeeId
     * @param : empId
     * @return : void
     */
    
    getAvailabilities(empId : string){
        let shifts : string[] = [];
        let comnts : Map<string,string> = new Map<string,string>();
        this.serviceAvailabilty.getEmployeeAvailabilities(empId).subscribe(
            data => {
                data.forEach(shift => {
                 shifts.push(shift.availDate+":"+shift.availTime);
                 comnts.set(shift.availDate, shift.availComments);
                });
                this.selectedShifts = shifts;
                this.comments = comnts;
            },error =>{
          console.error("Error saving availability!!!!!"); 
       });
    
    }
    
    /**
     * Get employee id corresponding to the email id that is obtained from okta
     * @param : email
     * @return : employeeId
     */
    getEmployeeId(email : string) {
        
        this.serviceAvailabilty.getEmployeeId(email).subscribe( employee => {
            this.employeeId = employee.empId;
            this.getAvailabilities(this.employeeId);
        });
    }
    
    selectAll(shift1:string,shift2:string,shift3:string,all:string){
        if(this.selectedAllShifts.includes(all)){
             this.selectedShifts.push(shift1,shift2,shift3);
        }
       
    }
    
    dayClicked(event : Event){
        //console.log("dayClicked "+this.comments("10/03/2018"));
        //console.log("comments "+this.comments);
        //this.comments.forEach((v,k) => console.log(`key:${k} value:${v}`));
       //this.comments.forEach(comment => console.log(`m[${comment.key}] = ${comment.value}`));
    }
        
    
    /*setComments(commentKey:string){
        this.comments.set(commentKey,commentKey);
    
    }*/


}
