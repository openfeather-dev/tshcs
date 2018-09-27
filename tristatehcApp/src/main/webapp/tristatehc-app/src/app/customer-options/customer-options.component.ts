import { Component, OnInit } from '@angular/core';
import { CustomerOptionsService } from './customer-options.service';
import {EnterAvailabilityService} from '../enter-availability/enter-availability.service';

@Component({
  selector: 'app-customer-options',
  templateUrl: './customer-options.component.html',
  styleUrls: ['./customer-options.component.css'],
  providers:[CustomerOptionsService]
})
export class CustomerOptionsComponent implements OnInit {
    buttonSelected : string ="";
    isEnabled : boolean = true;
    constructor(private service : CustomerOptionsService, private parentService : EnterAvailabilityService) { 
        service.isEnabled.subscribe(value =>{
            this.isEnabled = value;
            if(this.isEnabled){
               this.buttonSelected = ""; 
                this.parentService.disableElement(false);
            }            
        })
    }

  ngOnInit() {
  }

   setSelectedButton(buttonName : string){
       this.buttonSelected = buttonName;
       this.parentService.disableElement(true);
       
   }
}
