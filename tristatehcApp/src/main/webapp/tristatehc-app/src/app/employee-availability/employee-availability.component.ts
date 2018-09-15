import { Component, OnInit,Input,EventEmitter,Output,ChangeDetectionStrategy  } from '@angular/core';
import {CalendarEvent} from 'angular-calendar';
import { EnterAvailabilityService } from '../enter-availability/enter-availability.service';
import { UserProfile} from '../model/user-profile';
import { EmployeeAvailabilityService } from './employee-availability.service';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'primeng/components/common/api';
import { Availability } from '../model/availability';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-employee-availability',
  templateUrl: './employee-availability.component.html',
  styleUrls: ['./employee-availability.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
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
    msgs : Message[];
    blocked: boolean = true;
    isAuthenticated : boolean;
    today : Date = new Date();
    viewDate: Date = new Date();
    
  constructor(private availablility:EnterAvailabilityService, private empAvailService : EmployeeAvailabilityService, private route : ActivatedRoute, private oktaAuth: OktaAuthService) { }
    

  async ngOnInit() {
      this.msgs = [];
      this.isAuthenticated = await this.oktaAuth.isAuthenticated();
      if(this.isAuthenticated){
          
          this.oktaAuth.getUser().then(user => {
                this.userEmail = user.preferred_username;
            
      });
      }
      this.availablility.disableElement(true);
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
          availabilities.forEach(availability => {
              shifts.push(availability.availDate+":"+availability.availTime);
              comnts.set(availability.availDate, availability.availComments);
          });
           this.selectedShifts = shifts;
           this.comments = comnts; 
            this.blocked = false;
      }, error => {
          console.log(error);
          this.msgs = [];
          this.msgs.push({severity:'error', summary:'Error : ', detail:'Availability could not be retrieved please try later!!'});
          this.blocked = false;  
      });
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
           console.log(data);
           this.msgs = [];
           this.msgs.push({severity:'success', summary:'Saved : ', detail:'Availability was successfully saved'});
           this.blocked = false;

       },error =>{
           console.log(error);
           this.msgs = [];
           this.msgs.push({severity:'error', summary:'Error : ', detail:'Availability could not be saved'}); 
           this.blocked = false;

       }); 
    }

    
    cancel(){
       this.availablility.disableElement(false); 
    }
    
      

}
