import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';
import { UserAvailability } from '../model/user-availability';
import {UserAvailabilityService} from './user-availability.service';


@Component({
  selector: 'app-user-availability',
  templateUrl: './user-availability.component.html',
  styleUrls: ['./user-availability.component.css'],
  providers:[MessageService,UserAvailabilityService]
})
export class UserAvailabilityComponent implements OnInit {

    availCols : any[] = [];
    userAvailabilities : UserAvailability[] = [];
    blocked : boolean;
    showTable : boolean;
  constructor(private messageService: MessageService,private service : UserAvailabilityService) { }

  ngOnInit() {
      this.getAllAvailabilities();
  }
    
    /**
     * List all employee availabilities
     * 
     */
    
    getAllAvailabilities(){
        this.blocked = true;
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
            this.showTable = true;
            this.blocked = false;
        }, error =>{
            this.showTable = false;
            this.messageService.add({severity:'error', summary: 'Error', detail:'Availability data could not be retrieved please try later!!'});
            this.blocked = false;
        });
        
    }
    

}