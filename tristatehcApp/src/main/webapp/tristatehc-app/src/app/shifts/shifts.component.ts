import { Component, OnInit } from '@angular/core';
import {ShiftsService} from './shifts.service';
import { OktaAuthService } from '@okta/okta-angular';
import { Router} from '@angular/router';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.css']
})
export class ShiftsComponent implements OnInit {
        
    selectedShifts : string[] = [];
    comments : Map<string,string> = new Map<string,string>();
    view: string = 'month';
    messages:Map<string,string> = new Map<string,string>();
    viewDate: Date = new Date();
    email:string;
    loadComponent : boolean = false;

    constructor(private shifts : ShiftsService, private oktaAuth : OktaAuthService, private router : Router) {   }   
  
    ngOnInit() {
        
        this.oktaAuth.getUser().then(user => {this.email = user.email;
           this.messages = this.shifts.getMessages(this.email); 
           this.selectedShifts = this.shifts.getSelectedShifts(this.email); 
           this.comments = this.shifts.getComments(this.email); 
        });
               
        
    }
    
    
    getShiftDetails(){
        this.router.navigate(['/myshifts/shiftdetails']);
    }
    


}
