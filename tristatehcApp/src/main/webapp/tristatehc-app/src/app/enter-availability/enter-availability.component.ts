import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import {EnterAvailabilityService} from './enter-availability.service';
import { Availability } from '../model/availability';
import { UserAvailability } from '../model/user-availability';
import {MessageService} from 'primeng/api';

const CUSTOMER = "customer";

@Component({
  selector: 'app-enter-availability',
  templateUrl: './enter-availability.component.html',
  styleUrls: ['./enter-availability.component.css'],
  providers:[EnterAvailabilityService,MessageService]
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
    userAvailabilities : UserAvailability[] = [];
    availCols : any[] = [];
    showTable : boolean = false;
    blocked : boolean;
   
    constructor(private router : Router, private service : EnterAvailabilityService, private messageService: MessageService) {
        this.service.isDisabled.subscribe(isDisabled =>{
            this.isDisabled = isDisabled;
        });
        this.service.isBlocked.subscribe(isBlocked => {
            this.blocked = isBlocked;
        })
    
    }
    ngOnInit() {
        this.cols = [
            { field: 'fname', field2: 'lname', header: 'Search' },
        ];

        this.customers = [{ fname: 'Customer A', field2:'', id: 123 }, { fname: 'Customer B', field2:'', id: 890 }];

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
            }else{
                this.service.getAllEmployees().subscribe(users => {
                    users.forEach(user => this.namesList.push(user));
                    this.blocked = false;
                },error =>{
                    this.messageService.add({severity:'error', summary: 'Error', detail:'Employees could not be retrieved please try later!!'});
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
        let availabilities :UserAvailability[] = [];
        this.service.getAllAvailabilities().subscribe(userAvailabilities => {
            if(userAvailabilities){
                let header = userAvailabilities.shift();
                
                this.availCols = [ { field: 'empId', header: header.empId },
                                    { field: 'fut1', header: header.fut1 },
                                    { field: 'fut2', header: header.fut2 },
                                    { field: 'title', header: header.title },
                                    { field: 'fname', header: header.fname },
                                    { field: 'lname', header: header.lname },
                                    { field: 'cell', header: header.cell },
                                    { field: 'c0', header: header.c0 },
                                    { field: 'c1', header: header.c1 },
                                    { field: 'c2', header: header.c2 },
                                    { field: 'c3', header: header.c3 },
                                    { field: 'c4', header: header.c4 },
                                    { field: 'c5', header: header.c5 },
                                    { field: 'c6', header: header.c6 },
                                    { field: 'c7', header: header.c7 },];
                
                userAvailabilities.forEach( userAvailability => {
                    let avail = new UserAvailability();
                    avail.empId = userAvailability.empId;
                    avail.fut1 = userAvailability.fut1;
                    avail.fut2 = userAvailability.fut2;
                    avail.title = userAvailability.title;
                    avail.fname = userAvailability.fname;
                    avail.lname = userAvailability.lname;
                    avail.cell = userAvailability.cell;
                    avail.c0 = userAvailability.c0;
                    avail.c1 = userAvailability.c1;
                    avail.c2 = userAvailability.c2;
                    avail.c3 = userAvailability.c3;
                    avail.c4 = userAvailability.c4;
                    avail.c5 = userAvailability.c5;
                    avail.c6 = userAvailability.c6;
                    avail.c7 = userAvailability.c7;
                    availabilities.push(avail);
                })
            }
            this.userAvailabilities = availabilities;
            this.blocked = false;
        }, error =>{
            this.messageService.add({severity:'error', summary: 'Error', detail:'Availability data could not be retrieved please try later!!'});
            this.blocked = false;
            this.showTable = false;
            this.isDisabled = false;
        });
        
    }
    
    closeTable(){
        this.showTable = false;
        this.isDisabled = false;
    }

}
