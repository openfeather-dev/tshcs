import { Component, OnInit } from '@angular/core';
import { CustomerOptionsService } from '../customer-options/customer-options.service';

@Component({
  selector: 'app-customer-add-shifts',
  templateUrl: './customer-add-shifts.component.html',
  styleUrls: ['./customer-add-shifts.component.css']
})
export class CustomerAddShiftsComponent implements OnInit {
  shifts : any;
  configuredShifts : any;
  view: string = 'month';

  viewDate: Date = new Date();
    
  constructor(private parentService : CustomerOptionsService) { }

  ngOnInit() {
      this.configuredShifts = [{shift : "First Shift", shiftTime:"07:00-03:00"},
                                {shift : "Second Shift", shiftTime:"03:00-11:00"},
                                {shift : "Third Shift", shiftTime:"11:00-03:00"}];
      
      this.shifts = [
                                  {date:"28/08/2018" ,shiftTime:"07:00-03:00" , employeeCount:3}, {date:"29/08/2018" ,shiftTime:"07:00-03:00" , employeeCount:7}
                      ]        ;
         

      
      
                                    
     // console.log(typeof this.shifts[0].date);
  }
    /**
     * Method to inform parent component to enable its buttons
     */
    cancel(){
        this.parentService.enableButton(true);
    }
    
    getShift(date: string,shiftTime :string): number {
        let shift = this.shifts.find(s => s.date == date);
        
        if(shift){
             return shift.employeeCount;
        }else{
         return 0;    
        }
}

}
