import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { CustomerOptionsService } from '../customer-options/customer-options.service';

@Component({
  selector: 'app-customer-add-shifts',
  templateUrl: './customer-add-shifts.component.html',
  styleUrls: ['./customer-add-shifts.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CustomerAddShiftsComponent implements OnInit {
  shifts : any[];
  configuredShifts : any;
  view: string = 'month';

  viewDate: Date = new Date();
    
  constructor(private parentService : CustomerOptionsService) { }

  ngOnInit() {
      this.configuredShifts = [{shift : "First Shift", shiftTime:"07:00-03:00"},
                                {shift : "Second Shift", shiftTime:"03:00-11:00"},
                                {shift : "Third Shift", shiftTime:"11:00-03:00"}];
      
      this.shifts = [{"28/08/2018":{
                                  "07:00-03:00":"7", "03:00-11:00":"2"
                    } 
                      }        
         
          ];
      
      
                                    
  }
    /**
     * Method to inform parent component to enable its buttons
     */
    cancel(){
        this.parentService.enableButton(true);
    }

}
