import { Component, OnInit } from '@angular/core';
import { CustomerOptionsService } from './customer-options.service';
import {EnterAvailabilityService} from '../enter-availability/enter-availability.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription }   from 'rxjs';

@Component({
  selector: 'app-customer-options',
  templateUrl: './customer-options.component.html',
  styleUrls: ['./customer-options.component.css'],
  providers:[CustomerOptionsService]
})
export class CustomerOptionsComponent implements OnInit {
    buttonSelected : string ="";
    isEnabled : boolean = true;
    clientId : string;
    facilityName : string;
    facilityCity : string;
    facilityState : string;
    
    constructor(private service : CustomerOptionsService, private parentService : EnterAvailabilityService,private route : ActivatedRoute) { 
        service.isEnabled.subscribe(value =>{
            this.isEnabled = value;
            if(this.isEnabled){
               this.buttonSelected = ""; 
                //this.parentService.disableElement(false);
            }            
        })
    }

  ngOnInit() {
      this.clientId = this.route.snapshot.paramMap.get('facname');
      this.parentService.disableElement(true);
      this.facilityName = this.route.snapshot.paramMap.get('name');
      this.facilityCity = this.route.snapshot.paramMap.get('city');
      this.facilityState = this.route.snapshot.paramMap.get('state');
      
      
  }

   setSelectedButton(buttonName : string){
       this.buttonSelected = buttonName;
       this.parentService.disableElement(true);
       
   }
    
    cancel(){
      this.parentService.disableElement(false);  
    }
    
}
