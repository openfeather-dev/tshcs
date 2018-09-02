import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';
import {EnterAvailabilityService} from './enter-availability.service';

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
   
    constructor(private router : Router, private service : EnterAvailabilityService) {
        this.service.isDisabled.subscribe(isDisabled =>{
            this.isDisabled = isDisabled;
        });
    
    }
        ngOnInit() {
        this.employees = [{name:'Sneha',email:'snehazacharia'},{name:'Kurian', email:'kurianmathew'}];
         this.cols = [
            { field: 'name', header: 'Search' } ,
            ];
        
        this.customers = [{name : 'Customer A', id: 123},{name : 'Customer B', id: 890}];
        
            console.log(this.selectedValue);
        
    }
    

    /**
     * Method to get either list of cutomers or employees
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
    
   

}
