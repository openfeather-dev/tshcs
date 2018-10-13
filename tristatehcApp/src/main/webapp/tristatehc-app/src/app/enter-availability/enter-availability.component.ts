import { Component, OnInit} from '@angular/core';
import {EnterAvailabilityService} from './enter-availability.service';
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
    isDisabled : boolean = false;
    blocked : boolean;
   
    constructor(private service : EnterAvailabilityService, private messageService: MessageService) {
        this.service.isDisabled.subscribe(isDisabled =>{
            this.isDisabled = isDisabled;
        });
        this.service.isBlocked.subscribe(isBlocked => {
            this.blocked = isBlocked;
        })
    
    }
    ngOnInit() {
        this.cols = [
            { field: 'fname',  header: 'Search' },
            { field: 'lname',  header: 'Search' }
        ];

        this.customers = [{ fname: 'Customer A', id: 123 }, { fname: 'Customer B', id: 890 }];

    }
    

    /**
     * Get either list of customers or employees
     *
     */
        getList(){
            this.blocked = true;
            this.namesList = [];
            let userList : any[] = [];
            if(this.selectedValue  === CUSTOMER){
                this.namesList = this.customers;
                this.blocked = false;
                this.isCustomerSelected = true;
                this.isEmployeeSelected = false;
            }else{
                this.service.getAllEmployees().subscribe(users => {
                    users.forEach(user => userList.push(user));
                    this.namesList = userList;
                    this.blocked = false;
                },error =>{
                    this.messageService.add({severity:'error', summary: 'Error', detail:'Employees could not be retrieved please try later!!'});
                    this.blocked = false;
                });
                this.isEmployeeSelected = true;
                this.isCustomerSelected = false;
                
            }
        
        }
    
}
