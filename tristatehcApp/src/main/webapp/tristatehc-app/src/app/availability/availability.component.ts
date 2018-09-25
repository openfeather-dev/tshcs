import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {CheckboxModule} from 'primeng/checkbox';
import { AvailabilityService } from '../common-services/availability.service';
import { Availability } from '../model/availability';
import { OktaAuthService } from '@okta/okta-angular';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'app-availability',
    templateUrl: './availability.component.html',
    styleUrls: ['./availability.component.css'],
    changeDetection: ChangeDetectionStrategy.Default,
    providers:[MessageService]
})
export class AvailabilityComponent implements OnInit {
    
    selectedShifts : string[] = [];
    selectedAllShifts : string[] = [];
    comments : Map<string,string> = new Map<string,string>();
    view: string = 'month';
    today : Date = new Date();
    viewDate: Date = new Date();
    availability : Availability;
    email : string;
    isAuthenticated : boolean;
    checked : boolean = false;
    blocked: boolean = true;
    
    
    constructor(private serviceAvailabilty : AvailabilityService, private oktaAuth: OktaAuthService, private messageService: MessageService) { }
    
    async ngOnInit() {
        
      this.isAuthenticated = await this.oktaAuth.isAuthenticated();
      if(this.isAuthenticated){
          
          this.oktaAuth.getUser().then(user => {
            this.email = user.preferred_username;
            this.getAvailabilities(this.email);
      });
      
      }
    }

        
    /**
     * Store an employee's availabilities to database
     * @param : void
     * @return : void
     */
    save(){
       this.blocked = true;
       let availabilities : Availability[]=[];
       this.selectedShifts.forEach(shift => {
           let avail : Availability;
           avail = new Availability();
           avail.enterBySource = this.email;
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
           this.messageService.add({severity:'success', summary: 'Saved', detail:'Availability was successfully saved'});
           this.blocked = false;

       },error =>{
           this.messageService.add({severity:'error', summary: 'Error', detail:'Availability could not be saved.'}); 
           this.blocked = false;

       }); 
    }
    
    /**
     * Get an employee's availabilities using emloyeeId
     * @param : empId
     * @return : void
     */
    getAvailabilities(email : string){
        let shifts : string[] = [];
        let comnts : Map<string,string> = new Map<string,string>();
        this.serviceAvailabilty.getEmployeeAvailabilities(email).subscribe(
            data => {
                data.forEach(shift => { if(shift && shift.availDate !== null && shift.availTime !== null){
                    shifts.push(shift.availDate+":"+shift.availTime);
                    comnts.set(shift.availDate, shift.availComments);
                    }
                });
                this.selectedShifts = shifts;
                this.checkAll(this.selectedShifts);
                this.comments = comnts;
                this.blocked = false;
            },error =>{
                this.messageService.add({severity:'error', summary: 'Error', detail:'Availability could not be retrieved please try later!!'});
                this.blocked = false;       
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
        if(shifts.every(shift => this.selectedShifts.indexOf(shift) >= 0)){
            this.selectedAllShifts.push(all);
            this.selectedAllShifts = this.selectedAllShifts.slice();
        } else {
           let filteredShifts : string[]  = this.selectedAllShifts.filter(shift => shift !== all);
           this.selectedAllShifts = filteredShifts;
        }
    }
    
    
}
