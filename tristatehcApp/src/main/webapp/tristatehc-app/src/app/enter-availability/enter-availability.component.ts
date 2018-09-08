import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import {EnterAvailabilityService} from './enter-availability.service';
import { Availability } from '../model/availability';

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
    availabilities : Availability[];
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
        this.availabilities = [];
        this.service.getAvailabilities().subscribe(availabilities => {
            availabilities.forEach( availability => {
                let avail = new Availability();
                avail.empId = availability.empId;
                avail.availDate = availability.availDate;
                avail.availTime = availability.availTime;
                avail.availShift = availability.availShift;
                avail.availComments = availability.availComments;
                avail.enterBySource = availability.enterBySource;
                avail.enterTime = availability.enterTime;
                this.availabilities.push(avail);
            })
        });
        console.log(this.availabilities);
    }
    
    closeTable(){
        this.showTable = false;
        this.isDisabled = false;
    }
    
   

}
