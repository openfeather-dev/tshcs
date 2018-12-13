import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CustomerOptionsService } from '../customer-options/customer-options.service';
import { CustomerShiftConfigurationService } from './customer-shift-configuration.service';
import { ActivatedRoute } from '@angular/router';
import{ ShiftConfiguration } from '../model/shift-configuration';
import {MessageService} from 'primeng/api';

@Component({
    selector: 'app-customer-shift-configuration',
    templateUrl: './customer-shift-configuration.component.html',
    styleUrls: ['./customer-shift-configuration.component.css']
})
export class CustomerShiftConfigurationComponent implements OnInit {

    shiftTime: any;
    shifts: ShiftConfiguration[] =[];
    defaultShifts:ShiftConfiguration[] =[];
    clientId : string;
    enableDefault : boolean = true;
    blocked : boolean = true;
    
    constructor(private parentService : CustomerOptionsService, private service : CustomerShiftConfigurationService, private route : ActivatedRoute, private messageService: MessageService) { 
    
    }

    ngOnInit() {
        this.clientId = this.route.snapshot.paramMap.get('clientid');
            this.service.getCustomerShiftConfig(this.clientId).subscribe(shiftConfig =>{
             shiftConfig.forEach(config =>{
                 this.blocked = true;
                 this.enableDefault = false;
                 let shift : ShiftConfiguration = new ShiftConfiguration();
                 shift.clientId = config.clientId;
                 shift.shiftSequence = config.shiftSequence;
                 shift.seqLabel = config.seqLabel;
                 let tmpValue = config.shiftTime.split("-");
                 shift.shiftFromTime = tmpValue[0];
                 shift.shiftToTime = tmpValue[1];
                 this.shifts.push(shift);
                 this.blocked = false;
                 
             })
                
        }, error =>{
          this.messageService.add({severity:'error', summary: 'Error', detail:'Shift Configuration could not be retrieved please try later!!'});  
        
        });
        
       this.createDefault();
    }
    
    createDefault(){
       
        let seqLabels : any [] = [{seqlabel:"First Shift", seq:1},{seqlabel:"Second Shift",seq:2}, {seqlabel:"Third Shift", seq:3}];
        seqLabels.forEach(label => {
             let defaultShift : ShiftConfiguration = new ShiftConfiguration();
             defaultShift.clientId =  this.clientId;
             defaultShift.shiftSequence = label.seq;
             defaultShift.seqLabel = label.seqlabel;
             this.defaultShifts.push(defaultShift); 
        });
       
       this.blocked = false;
    }
    
    /**
     * Method to inform parent component to enable its buttons
     */
    cancel(){
        this.parentService.enableButton(true);
    }
    
    save(){
       let shiftsConfig : ShiftConfiguration[] = [];
       
       if(this.enableDefault){
           shiftsConfig = this.defaultShifts;
       }else{
           shiftsConfig = this.shifts;
       }
       this.saveShifts(shiftsConfig);
    }

    saveShifts(shiftsConfig : ShiftConfiguration[]){
        if(shiftsConfig){
             let saveShifts : ShiftConfiguration[] = [];
             shiftsConfig.forEach(shift=>{
               let saveShift : ShiftConfiguration = new ShiftConfiguration();
               saveShift.clientId = this.clientId;
               saveShift.shiftSequence = shift.shiftSequence
               saveShift.seqLabel = shift.seqLabel;
               let fromTime : any = shift.shiftFromTime;
                let toTime : any = shift.shiftToTime;
                if(fromTime instanceof Object){
                   shift.shiftFromTime = new Date(shift.shiftFromTime).getHours()+":"+("0" + new Date(shift.shiftFromTime).getMinutes()).slice(-2);;
                }
                if(toTime instanceof  Object){
                   shift.shiftToTime = new Date(shift.shiftToTime).getHours()+":"+("0" + new Date(shift.shiftToTime).getMinutes()).slice(-2);;
                }
                if(!shift.shiftFromTime || !shift.shiftToTime){
                    shift.shiftFromTime = "";
                    shift.shiftToTime = "";
                }
                saveShift.shiftTime = shift.shiftFromTime+"-"+shift.shiftToTime;
                saveShifts.push(saveShift);
                   
            })
           this.service.saveCustomerShiftConfig(this.clientId,saveShifts).subscribe(savedShift =>{
               this.messageService.add({severity:'success', summary: 'Success', detail:'Shift Configuration was successfully saved'}); 
           }, error =>{
               this.messageService.add({severity:'error', summary: 'Error', detail:'Shift Configuration could not be saved'}); 
           })  
        }    
    }
    
   addCustomShift(){
       let shiftsConfig : ShiftConfiguration = new ShiftConfiguration();
       let count : number = 0;
       shiftsConfig.clientId = this.clientId;
       if(this.enableDefault){
           this.defaultShifts.map(shift => {
             if(shift.seqLabel.includes("Custom Shift")) {
               count ++;
             }
           });
           shiftsConfig.seqLabel = "Custom Shift "+(count+1); 
           shiftsConfig.shiftSequence = count+4; 
           this.defaultShifts.push(shiftsConfig);
       }else{
            this.shifts.map(shift => {
             if(shift.seqLabel.includes("Custom Shift")) {
               count ++;
              }
           });
           shiftsConfig.seqLabel = "Custom Shift "+(count+1);  
           shiftsConfig.shiftSequence = count+4;
           this.shifts.push(shiftsConfig);
       }
       
       
    }
    
    
}
