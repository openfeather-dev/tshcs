import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CustomerOptionsService } from '../customer-options/customer-options.service';

@Component({
    selector: 'app-customer-shift-configuration',
    templateUrl: './customer-shift-configuration.component.html',
    styleUrls: ['./customer-shift-configuration.component.css']
})
export class CustomerShiftConfigurationComponent implements OnInit {

    shiftTime: any;
    shifts: any;
    constructor( private parentService : CustomerOptionsService) { }

    ngOnInit() {
        this.shifts =
            {
                "firstShift": {
                    "shiftName": "First Shift",
                    "from": "07:00",
                    "to": "03:00"
                    },


                "secondShift": {

                    "shiftName": "Second Shift",
                    "from": "03:00",
                    "to": "11:00"

                    },

                "thirdShift": {

                    "shiftName": "Third Shift",
                    "from": "11:00",
                    "to": "07:00"

                }
            }


    }
    
    /**
     * Method to inform parent component to enable its buttons
     */
    cancel(){
        this.parentService.enableButton(true);
    }

}
