import { Component, OnInit } from '@angular/core';
import { CustomerOptionsService } from './customer-options.service';
import {EnterAvailabilityService} from '../enter-availability/enter-availability.service';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-customer-options',
  templateUrl: './customer-options.component.html',
  styleUrls: ['./customer-options.component.css'],
  providers:[CustomerOptionsService]
})
export class CustomerOptionsComponent implements OnInit {
    buttonSelected : string ="";
    isEnabled : boolean = true;
    items: MenuItem[];
    constructor(private service : CustomerOptionsService, private parentService : EnterAvailabilityService) { 
        service.isEnabled.subscribe(value =>{
            this.isEnabled = value;
            if(this.isEnabled){
               this.buttonSelected = ""; 
                this.parentService.disableElement(false);
                this.enableMenuItems();
            }            
        })
    }

  ngOnInit() {
      console.log(this.buttonSelected);
      
      this.items = [
            {label: 'Add Shifts', icon: 'fa fa-fw fa-bar-chart',routerLink:"addShifts",disabled:false, command: (event) => {
              console.log(event);
              this.onMenuItemSelect(event.item.label);
                }},
           // {label: 'Assign Shifts', icon: 'fa fa-fw fa-calendar',disabled:true,command:"onMenuItemSelect"},
            {label: 'Shifts Configuration', icon: 'fa fa-fw fa-book',routerLink:"config",disabled:false, command: (event) => {
              this.onMenuItemSelect(event.item.label);
                }}
        ];
  }

   setSelectedButton(buttonName : string){
       this.buttonSelected = buttonName;
       this.parentService.disableElement(true);
       
   }
    
    onMenuItemSelect(label:string){
        console.log("menu clicked ...." +label);
        this.items.forEach(item=>{
        if(item.label !=label){
              item.disabled=true;  
        }    
        
        });
        
        this.parentService.disableElement(true);
    }
    
    enableMenuItems(){
        
        this.items.forEach(item=>{
            item.disabled=false;
    
    });
        }
    }
