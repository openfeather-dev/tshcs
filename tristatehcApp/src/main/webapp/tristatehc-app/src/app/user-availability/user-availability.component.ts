import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {MessageService} from 'primeng/api';
import { UserAvailability } from '../model/user-availability';
import { SearchCriteriaUserAvailability } from '../model/search-criteria-user-availability';
import {UserAvailabilityService} from './user-availability.service';
import { environment } from '../../environments/environment';
import {SelectItem} from 'primeng/api';
import { OktaAuthService } from '@okta/okta-angular';


@Component({
  selector: 'app-user-availability',
  templateUrl: './user-availability.component.html',
  styleUrls: ['./user-availability.component.css'],
  providers:[MessageService,UserAvailabilityService],
  encapsulation: ViewEncapsulation.None
})
export class UserAvailabilityComponent implements OnInit {
    availCols : any[] = [];
    userAvailabilities : UserAvailability[] = [];
    blocked : boolean;
    showTable : boolean;
    maxRadius : number;
    radius : number;
    filteredZipcode : any[] = [];
    selectedZipcode : any = "";
    facilities: any[] = [];
    selectedFacility: string="";
    selectedShift7To3 :string[] = [];
    selectedShift3To11 : string[] = [];
    selectedShift11To7: string[] = [];
    selectedShiftOther: string[] = [];
    selectedTitle: string="All";
    selectedEliminateBooked : string[] = [];
    selectedEliminateBanned : string[] = [];
    selectedEliminatePending : string[] = [];
    selectedEliminateNotBeen : string[] = [];
    defaultDate: Date;
    shiftDateFrom : Date;
    shiftDateTo : Date;
    msgs: string = ""; //city message
    loggedInUserEmail : string ="";
    
    country: any;

    filteredCountriesSingle: any[];

 
    
  constructor(private messageService: MessageService,private service : UserAvailabilityService,private oktaAuth: OktaAuthService) { 
      
  }

  async ngOnInit() {
      this.blocked = true;
      this.facilities.push({label:"Select Facility", value:""});
      this.service.getAllCustomers().subscribe(customers => {
                    customers.forEach(customer => this.facilities.push({label:customer.lastName, value:customer.lastName}));
       });
      this.maxRadius = environment.radiusInMiles;
      this.radius = this.maxRadius;
      this.defaultDate = new Date();
      if (this.shiftDateFrom == undefined){
          this.shiftDateFrom = this.defaultDate;
      }
      if (this.shiftDateTo == undefined){
          this.shiftDateTo =  new Date();
          this.shiftDateTo.setDate(this.shiftDateTo.getDate() +7);
      }
      let isAuthenticated = await this.oktaAuth.isAuthenticated();
          if(isAuthenticated){
              
              this.oktaAuth.getUser().then(user => {
                this.loggedInUserEmail  = user.preferred_username;
                this.getAllAvailabilities();
          
          });
      }
  }
    
    /**
     * List all employee availabilities
     * 
     */
    
    getAllAvailabilities(){
        let availabilities : UserAvailability[] = [];
        let searchCriteria = new SearchCriteriaUserAvailability();
        searchCriteria.loggedInUserEmail = this.loggedInUserEmail;
        searchCriteria.zipcode = this.selectedZipcode;
        searchCriteria.selectedFacility = this.selectedFacility;
        searchCriteria.radius = this.radius.toString();
        searchCriteria.shiftDateFrom = (this.shiftDateFrom.getMonth()+1)+"/"+this.shiftDateFrom.getDate()+"/"+this.shiftDateFrom.getFullYear();
        searchCriteria.shiftDateTo = (this.shiftDateTo.getMonth()+1)+"/"+this.shiftDateTo.getDate()+"/"+this.shiftDateTo.getFullYear()
        searchCriteria.selectedShift7To3 = this.selectedShift7To3.toString();
        searchCriteria.selectedShift3To11 = this.selectedShift3To11.toString();
        searchCriteria.selectedShift11To7 = this.selectedShift11To7.toString();
        searchCriteria.selectedShiftOther = this.selectedShiftOther.toString();
        searchCriteria.selectedTitle = this.selectedTitle; 
        searchCriteria.selectedEliminateBooked = this.selectedEliminateBooked.toString();
        searchCriteria.selectedEliminateBanned = this.selectedEliminateBanned.toString();
        searchCriteria.selectedEliminatePending = this.selectedEliminatePending.toString();
        searchCriteria.selectedEliminateNotBeen = this.selectedEliminateNotBeen.toString();
        this.service.getAllAvailabilities(searchCriteria).subscribe(userAvailabilities => {
            
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
            this.showTable = true;
            this.blocked = false;
        }, error =>{
            this.showTable = false;
            this.messageService.add({severity:'error', summary: 'Error', detail:'Availability data could not be retrieved please try later!!'});
            this.blocked = false;
        });
        
    }
    
    search(){
        this.blocked = true;
        this.getAllAvailabilities();
    }
    
    filteredZipcodes(event){
        this.filteredZipcode;
        let query = event.query;
        this.service.getAllZipcodes(query).subscribe(filteredZipcodes =>{
            this.filteredZipcode = [];
            filteredZipcodes.forEach(zip =>{
                this.filteredZipcode.push(zip.zipCode.toString());
                this.msgs = zip.cityName;
            });
        });
        
    }
    
    clear(){
       this.msgs = ""; 
    }
     
}
