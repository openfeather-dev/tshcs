import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import {EnterAvailabilityService} from './enter-availability.service';
import { Availability } from '../model/availability';
import { UserAvailability } from '../model/user-availability';

const CUSTOMER = "customer";

@Component({
  selector: 'app-enter-availability',
  templateUrl: './enter-availability.component.html',
  styleUrls: ['./enter-availability.component.css'],
  providers:[EnterAvailabilityService]
})
export class EnterAvailabilityComponent implements OnInit {
    
    employees : any[];
    customers : any[];
    cols : any[];
    isEmployeeSelected : boolean = false;
    isCustomerSelected : boolean = false;
    isRadioButtonDisabled : boolean = false;
    selectedValue : string;
    namesList : any[];
    employeeEmail : string;
    isDisabled : boolean = false;
    userAvailabilities : UserAvailability[];
    availCols : any[];
    showTable : boolean = false;
   
    constructor(private router : Router, private service : EnterAvailabilityService) {
        this.service.isDisabled.subscribe(isDisabled =>{
            this.isDisabled = isDisabled;
        });
    
    }
    ngOnInit() {
        this.employees = [{ name: 'Sneha', email: 'snehazacharia' }, { name: 'Kurian', email: 'kurianmathew' }];
        this.cols = [
            { field: 'name', header: 'Search' },
        ];

        this.customers = [{ name: 'Customer A', id: 123 }, { name: 'Customer B', id: 890 }];

        this.availCols = [
            { field: 'empId', header: 'Emplopyee Id' },
            { field: 'fname', header: 'Name' },
            { field: 'phoneCell', header: 'Contact' },
            { field: 'availDate', header: 'Available Date' },
            { field: 'availTime', header: 'Available Time' },
            { field: 'availShift', header: 'Available Shift' },
            { field: 'availComments', header: 'Comments' },
            { field: 'enterBySource', header: 'Source' },
            { field: 'enterTime', header: 'Date Entered' },
        ];
        

    }
    

    /**
     * Get either list of customers or employees
     *
     */
        getList(){
            if(this.selectedValue  === CUSTOMER){
                this.namesList = this.customers;
                this.isCustomerSelected = true;
                this.isEmployeeSelected = false;
                console.log("this.isCustomerSelected"+this.isCustomerSelected);
            }else{
               
                this.namesList = this.employees;
                console.log(this.namesList);
                this.isEmployeeSelected = true;
                this.isCustomerSelected = false;
                
            }
        
        }
    
    /**
     * List all employee availabilities
     * 
     */
    getAvailabilities(){
        this.showTable = true;
        this.isDisabled = true;
        this.userAvailabilities = [];
        this.service.getAvailabilities().subscribe(userAvailabilities => {
            userAvailabilities.forEach( userAvailability => {
                let avail = new UserAvailability();
                avail.empId = userAvailability.empId;
                avail.fname = userAvailability.fname+" "+userAvailability.lname;
                avail.phoneCell = userAvailability.phoneCell;
                avail.availDate = userAvailability.availDate;
                avail.availTime = userAvailability.availTime;
                avail.availShift = userAvailability.availShift;
                avail.availComments = userAvailability.availComments;
                avail.enterBySource = userAvailability.enterBySource;
                avail.enterTime = userAvailability.enterTime;
                this.userAvailabilities.push(avail);
            })
        });
        
    }
    
    closeTable(){
        this.showTable = false;
        this.isDisabled = false;
    }
    
   

}
