import { Component,OnInit,ViewEncapsulation } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { Data } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { JobseekersService } from './jobseekers.service';
import { JobseekersData } from'../app/model/jobseekers-data';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'jobseekers',
  templateUrl: '../jobseekers/jobseekers.component.html',
  styleUrls: ['../jobseekers/jobseekers.component.css'],
  providers: [MessageService],
  encapsulation: ViewEncapsulation.None
  
})
export class Jobseekers implements OnInit{
        
    jobForm : FormGroup;
    blocked : boolean = false;
    isSubmitted : boolean = false;
          
    constructor(private formBuilder: FormBuilder, private jobService : JobseekersService, private messageService: MessageService) { }
    
    ngOnInit() {
       this.jobForm =  this.formBuilder.group({
            lastName : new FormControl('',Validators.required),
            firstName : new FormControl('',Validators.required),
            middleInitial: new FormControl(''),
            address: new FormControl('',Validators.required),
            city: new FormControl('',Validators.required),
            state: new FormControl('',Validators.required),
            zip: new FormControl('',Validators.compose([ Validators.required,Validators.pattern('[0-9]{5}')])),
            homePhone: new FormControl('',Validators.compose([Validators.required, Validators.pattern('[0-9]{10}')])),
            cellPhone: new FormControl('',Validators.compose([Validators.required, Validators.pattern('[0-9]{10}')])),
            email: new FormControl('',Validators.compose([Validators.required, Validators.email])),
            ssn: new FormControl('',Validators.compose([Validators.pattern('[0-9]{9}')])),
            adult: new FormControl('',Validators.required),
            emergencyContact: new FormControl('',Validators.required),
            emergencyPhone: new FormControl('',Validators.compose([Validators.required, Validators.pattern('[0-9]{10}')])),
            positions: new FormControl('',Validators.required),
            unavailable: new FormControl(''),
            highSchoolName: new FormControl(''),
            highSchoolAddress: new FormControl(''),
            highSchoolYears: new FormControl(''),
            highSchoolDegree: new FormControl(''),
            collegeName: new FormControl(''),
            collegeAddress: new FormControl(''),
            collegeYears: new FormControl(''),
            collegeDegree: new FormControl(''),
            tradeName: new FormControl(''),
            tradeAddress: new FormControl(''),
            tradeYears: new FormControl(''),
            tradeDegree: new FormControl(''),
            graduateName: new FormControl(''),
            graduateAddress: new FormControl(''),
            graduateYears: new FormControl(''),
            graduateDegree: new FormControl(''),
            refName1:new FormControl('',Validators.required),
            refPosition1: new FormControl('',Validators.required),
            refAddress1: new FormControl('',Validators.required),
            refPhone1: new FormControl('',Validators.compose([Validators.required, Validators.pattern('[0-9]{10}')])),
            refName2: new FormControl('',Validators.required),
            refPosition2: new FormControl('',Validators.required),
            refAddress2: new FormControl('',Validators.required),
            refPhone2: new FormControl('',Validators.compose([Validators.required, Validators.pattern('[0-9]{10}')])),
           
       });
    }
   
    
    
   onSubmit(){
        this.blocked = true;
        if (this.jobForm.invalid) {
            return;
        }
       
        let jobApp : JobseekersData;
        jobApp = new JobseekersData();
        jobApp.lastName = this.jobForm.value.lastName;
        jobApp.firstName = this.jobForm.value.firstName;
        jobApp.middleInitial= this.jobForm.value.middleInitial;
        jobApp.address= this.jobForm.value.address;
        jobApp.city= this.jobForm.value.city;
        jobApp.state= this.jobForm.value.state;
        jobApp.zip= this.jobForm.value.zip;
        jobApp.homePhone= this.jobForm.value.homePhone;
        jobApp.cellPhone= this.jobForm.value.cellPhone;
        jobApp.email= this.jobForm.value.email;
        jobApp.ssn= this.jobForm.value.ssn;
        jobApp.adult= this.jobForm.value.adult;
        jobApp.emergencyContact= this.jobForm.value.emergencyContact;
        jobApp.emergencyPhone= this.jobForm.value.emergencyPhone;
        jobApp.positions= this.jobForm.value.positions;
        jobApp.unavailable= this.jobForm.value.unavailable;
        jobApp.highSchoolName= this.jobForm.value.highSchoolName;
        jobApp.highSchoolAddress= this.jobForm.value.highSchoolAddress;
        jobApp.highSchoolYears= this.jobForm.value.highSchoolYears;
        jobApp.highSchoolDegree= this.jobForm.value.highSchoolDegree;
        jobApp.collegeName= this.jobForm.value.collegeName;
        jobApp.collegeAddress= this.jobForm.value.collegeAddress;
        jobApp.collegeYears= this.jobForm.value.collegeYears;
        jobApp.collegeDegree= this.jobForm.value.collegeDegree;
        jobApp.tradeName= this.jobForm.value.tradeName;
        jobApp.tradeAddress= this.jobForm.value.tradeAddress;
        jobApp.tradeYears= this.jobForm.value.tradeYears;
        jobApp.tradeDegree= this.jobForm.value.tradeDegree;
        jobApp.graduateName= this.jobForm.value.graduateName;
        jobApp.graduateAddress= this.jobForm.value.graduateAddress;
        jobApp.graduateYears= this.jobForm.value.graduateYears;
        jobApp.graduateDegree= this.jobForm.value.graduateDegree;
        jobApp.refName1= this.jobForm.value.refName1;
        jobApp.refPosition1= this.jobForm.value.refPosition1;
        jobApp.refAddress1= this.jobForm.value.refAddress1;
        jobApp.refPhone1= this.jobForm.value.refPhone1;
        jobApp.refName2= this.jobForm.value.refName2;
        jobApp.refPosition2= this.jobForm.value.refPosition2;
        jobApp.refAddress2= this.jobForm.value.refAddress2;
        jobApp.refPhone2= this.jobForm.value.refPhone2;
       
       this.jobService.saveApplication(jobApp).subscribe(data => {
           this.blocked = false;
           this.isSubmitted = true;
       }, error => {
           this.blocked = false;
           this.messageService.add({severity:'error', summary:'Error', detail:'Application could not be saved'});
       })
   }
    
   //to get easy access to fields
    get jobform() { 
        return this.jobForm.controls;
    }
    
       
}


