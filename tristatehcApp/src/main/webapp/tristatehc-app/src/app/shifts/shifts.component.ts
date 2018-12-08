import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {ShiftsService} from './shifts.service';
import { OktaAuthService } from '@okta/okta-angular';
import { Router} from '@angular/router';

@Component({
  selector: 'app-shifts',
  templateUrl: './shifts.component.html',
  styleUrls: ['./shifts.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShiftsComponent implements OnInit {
        
    selectedShifts : string[] = [];
    comments : Map<string,string> = new Map<string,string>();
    darkBlueLabel : Map<string,string> = new Map<string,string>();
    skyBlueLabel : Map<string,string> = new Map<string,string>();
    grayLabel : Map<string,string> = new Map<string,string>();
    greenLabel : Map<string,string> = new Map<string,string>();
    orangeLabel : Map<string,string> = new Map<string,string>();
    redLabel : Map<string,string> = new Map<string,string>();
    
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
               
        this.grayLabel.set("10/28/2018","todays 10/28/2018");
          this.darkBlueLabel.set("10/28/2018","today 10/28/2018 ");
          this.skyBlueLabel.set("10/28/2018","today 10/28/2018 ");
          this.greenLabel.set("10/28/2018","today 10/28/2018");
          this.orangeLabel.set("10/28/2018","today 10/28/2018");
         this.redLabel.set("10/28/2018","today 10/28/2018");
        
        
        
        // this.grayLabel.set("10/19/2018","todays 10/19/2018");
          this.darkBlueLabel.set("10/19/2018","today 10/19/2018");
        //  this.skyBlueLabel.set("10/19/2018","today 10/19/2018");
          this.greenLabel.set("10/19/2018","today 10/19/2018");
          this.orangeLabel.set("10/19/2018","today 10/19/2018");
         this.redLabel.set("10/19/2018","today 10/19/2018");
        
         this.grayLabel.set("10/11/2018","todays 10/11/2018");
          this.darkBlueLabel.set("10/11/2018","today 10/11/2018");
          this.skyBlueLabel.set("10/11/2018","today 10/11/2018");
          this.greenLabel.set("10/11/2018","today 10/11/2018");
          this.orangeLabel.set("10/11/2018","today 10/11/2018");
         this.redLabel.set("10/11/2018","today 10/11/2018");
        
         this.grayLabel.set("10/23/2018","todays grayLabel");
          this.darkBlueLabel.set("10/23/2018","today darkBlueLabel");
          this.skyBlueLabel.set("10/23/2018","today skyBlueLabel");
          this.greenLabel.set("10/23/2018","today greenLabel");
          this.orangeLabel.set("10/23/2018","today orangeLabel");
         this.redLabel.set("10/23/2018","today redLabel");
        
         this.grayLabel.set("10/04/2018","todays grayLabel");
          this.darkBlueLabel.set("10/04/2018","today darkBlueLabel");
          this.skyBlueLabel.set("10/04/2018","today skyBlueLabel");
          this.greenLabel.set("10/04/2018","today greenLabel");
          this.orangeLabel.set("10/04/2018","today orangeLabel");
         this.redLabel.set("10/04/2018","today redLabel");
    }
    
    
    getShiftDetails(){
        this.router.navigate(['/myshifts/shiftdetails']);
    }
    


}
