import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import {EnterAvailabilityService} from './enter-availability.service';
import { Availability } from '../model/availability';
import { UserAvailability } from '../model/user-availability';
import { DatePipe } from '@angular/common';

const CUSTOMER = "customer";

@Component({
  selector: 'app-enter-availability',
  templateUrl: './enter-availability.component.html',
  styleUrls: ['./enter-availability.component.css'],
  providers:[EnterAvailabilityService,DatePipe]
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
    blocked : boolean;
   
    constructor(private router : Router, private service : EnterAvailabilityService, private datePipe: DatePipe) {
        this.service.isDisabled.subscribe(isDisabled =>{
            this.isDisabled = isDisabled;
        });
    
    }
    ngOnInit() {
        //this.employees = [{ name: 'Sneha', email: 'snehazacharia' }, { name: 'Kurian', email: 'kurianmathew' }];
        this.cols = [
            { field: 'fname', field2: 'lname', header: 'Search' },
        ];

        this.customers = [{ fname: 'Customer A', field2:'', id: 123 }, { fname: 'Customer B', field2:'', id: 890 }];

        this.availCols = [
            { field: 'empId', header: 'Emplopyee Id' },
            { field: 'fname', header: 'Name' },
            { field: 'phoneCell', header: 'Contact' },
            { field: 'availDate', header: 'Available Date' },
            { field: 'availTime', header: 'Available Time' },
            { field: 'availShift', header: 'Available Shift' },
            { field: 'availComments', header: 'Comments' },
            { field: 'enterBySource', header: 'Source' },
            { field: 'fmtDateTime', header: 'Date Entered' },
        ];
        

    }
    

    /**
     * Get either list of customers or employees
     *
     */
        getList(){
            this.blocked = true;
            this.namesList = [];
            if(this.selectedValue  === CUSTOMER){
                this.namesList = this.customers;
                this.blocked = false;
                this.isCustomerSelected = true;
                this.isEmployeeSelected = false;
                console.log("this.isCustomerSelected"+this.isCustomerSelected);
            }else{
                this.service.getAllEmployees().subscribe(users => {
                    users.forEach(user => this.namesList.push(user));
                    this.blocked = false;
                },error =>{
                    this.blocked = false;
                });
                this.isEmployeeSelected = true;
                this.isCustomerSelected = false;
                
            }
        
        }
    
    /**
     * List all employee availabilities
     * 
     */
    getAllAvailabilities(){
        this.blocked = true;
        this.showTable = true;
        this.isDisabled = true;
        this.userAvailabilities = [];
        this.datePipe = new DatePipe("en-US"); 
        this.service.getAllAvailabilities().subscribe(userAvailabilities => {
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
                avail.fmtDateTime = this.datePipe.transform(avail.enterTime,'MM/dd/yyyy');
                this.userAvailabilities.push(avail);
            })
            this.blocked = false;
        });
        
    }
    
    closeTable(){
        this.showTable = false;
        this.isDisabled = false;
    }
    
   

}
