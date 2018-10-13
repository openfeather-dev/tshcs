import { Component, OnInit,Input,EventEmitter,Output,ChangeDetectionStrategy,ViewEncapsulation  } from '@angular/core';
import {CalendarEvent} from 'angular-calendar';
import { EnterAvailabilityService } from '../enter-availability/enter-availability.service';
import { UserProfile} from '../model/user-profile';
import { EmployeeAvailabilityService } from './employee-availability.service';
import { ActivatedRoute } from '@angular/router';
import { Availability } from '../model/availability';
import { OktaAuthService } from '@okta/okta-angular';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-employee-availability',
  templateUrl: './employee-availability.component.html',
  styleUrls: ['./employee-availability.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
  providers:[MessageService]
})
export class EmployeeAvailabilityComponent implements OnInit {

    selectedShifts : string[] = [];
    selectedAllShifts : string[] = [];
    comments : Map<any,any> = new Map<any,any>();
    view: string = 'month';
    clickedDate: Date;
    events: CalendarEvent[];
    email : string;
    userEmail : string;
    blocked: boolean = true;
    isAuthenticated : boolean;
    today : Date = new Date();
    viewDate: Date = new Date();
    employeeName : string;
    
  constructor(private availablility:EnterAvailabilityService, private empAvailService : EmployeeAvailabilityService, private route : ActivatedRoute, private oktaAuth: OktaAuthService, private messageService: MessageService) { }
    

  async ngOnInit() {
      this.isAuthenticated = await this.oktaAuth.isAuthenticated();
      if(this.isAuthenticated){
          
          this.oktaAuth.getUser().then(user => {
                this.userEmail = user.preferred_username;
            
      });
      }
      this.availablility.disableElement(true);
      this.availablility.blockUI(true);
      this.email = this.route.snapshot.paramMap.get('email');
      this.getEmployeeAvailability();
      
       this.events = [
    {
      title: 'Has custom class',
      start: new Date(),
      meta: {
        id: 1,
         selectedShifts : [],   
      }
    }
  ];
      
  }
   /**
    * Get the employee's availabilities
    * @param : void
    * @return : void
    */
     
    getEmployeeAvailability(){
         let shifts : string[] = [];
         let comnts : Map<string,string> = new Map<string,string>();
        this.empAvailService.getEmployeeAvailability(this.email).subscribe(availabilities =>{
          this.employeeName = availabilities[0].employeeName;
          availabilities.forEach(availability => {if(availability && availability.availDate !== null && availability.availTime !== null){
                 shifts.push(availability.availDate+":"+availability.availTime);
                 comnts.set(availability.availDate, availability.availComments);
              }
          });
           this.selectedShifts = shifts;
           this.checkAll(this.selectedShifts);
           this.comments = comnts;
           this.availablility.blockUI(false);
      }, error => {
          this.messageService.add({severity:'error', summary: 'Error', detail:'Availability could not be retrieved please try later!!'});
          this.availablility.blockUI(false);
      });
    }
    
    /**
     * On page load check if the All checkbox should be checked
     */
    checkAll(shifts : string[]) {
        shifts.sort();
        let date = "";
        let count = 0;
        let tempValue = [];
        shifts.forEach(shift => {
            tempValue = [];
            tempValue = shift.split(":");
            if (date === "") {
                date = tempValue[0];
                count++;
            } else if (date === tempValue[0]) {
                count++;
                if (count === 3) {
                    this.selectedAllShifts.push(tempValue[0] + ":All");
                    this.selectedAllShifts = this.selectedAllShifts.slice();
                    count = 0;
                    date = "";
                }
            } else {
               count = 1;
               date = tempValue[0]; 
            }
        }, error =>{
            this.messageService.add({severity:'error', summary: 'Error', detail:'Availability could not be retrieved please try later!!'});
        })
    }
    
    
    
    /**
     * Store an employee's availabilities to database
     * @param : void
     * @return : void
     */
    save(){
        this.availablility.blockUI(true);
       let availabilities : Availability[]=[];
       this.selectedShifts.forEach(shift => {
           let avail : Availability;
           avail = new Availability();
           avail.enterBySource = this.userEmail;
           let tempVal = shift.split(":");
           avail.availDate = tempVal[0];
           avail.availTime = tempVal[1];
           this.comments.forEach((value: string, key: string) => {
                avail.availComments = this.comments.get(avail.availDate);
             });
           availabilities.push(avail);
       })
       this.empAvailService.saveEmployeeAvailabilities(availabilities, this.email).subscribe(
       data => {
           this.messageService.add({severity:'success', summary: 'Saved', detail:'Availability was successfully saved'});
           this.availablility.blockUI(false);

       },error =>{
           this.messageService.add({severity:'error', summary: 'Error', detail:'Availability could not be saved'}); 
           this.availablility.blockUI(false);

       }); 
    }

    
    cancel(){
       this.availablility.disableElement(false); 
    }
    
     /**
     * Action to take when the All checkbox is clicked
     */
     selectAll(shift1 : string, shift2 : string, shift3 : string, all : string){
        let shifts : string[] = [];
        shifts.push(shift1,shift2,shift3);
        if(this.selectedAllShifts.some(allShift => allShift === all)){
            shifts.forEach(shift => {  
                if(this.selectedShifts.indexOf(shift) < 0){
                     this.selectedShifts.push(shift);   
                }
            });
            this.selectedShifts = this.selectedShifts.slice();
        } else {
            let removeShifts: string[] = []; 
            removeShifts.push(shift1,shift2,shift3);
            let filteredShifts : string[] = this.selectedShifts.filter( shift => removeShifts.indexOf(shift) < 0);
            this.selectedShifts = filteredShifts;
        }
       
    }
    
    /**
     * Checking if the All checkbox should be checked/unchecked
     */
    checkIfAllSelected(shift1 : string, shift2 : string, shift3 : string, all : string){
        let shifts : string[] = [];
        shifts.push(shift1,shift2,shift3);
        if(shifts.every(shift => this.selectedShifts.indexOf(shift) > 0)){
            this.selectedAllShifts.push(all);
            this.selectedAllShifts = this.selectedAllShifts.slice();
        } else {
           let filteredShifts : string[]  = this.selectedAllShifts.filter(shift => shift !== all);
           this.selectedAllShifts = filteredShifts;
        }
    }
 
    
    isDisabled(date:Date){
        let today : Date = new Date();
        let dateToday : Date = new Date(today.getFullYear(), today.getMonth(), today.getDate(),0,0,0,0);
        return (date.getTime() < dateToday.getTime());
    }

}
