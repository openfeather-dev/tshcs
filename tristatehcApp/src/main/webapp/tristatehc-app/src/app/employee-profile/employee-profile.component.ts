import { Component,OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { Data } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { EmployeeProfileService } from './employee-profile.service';
import { JobseekersData } from '../model/jobseekers-data';
import { State } from '../model/state';
import { CellPhoneProvider } from '../model/cell-phone-provider';
import {MessageService} from 'primeng/api';
import { environment } from '../../environments/environment';
import {SelectItem} from 'primeng/api';
import { OktaAuthService } from '@okta/okta-angular';
import { ActivatedRoute } from '@angular/router';
import { EnterAvailabilityService } from '../enter-availability/enter-availability.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css'],
})
export class EmployeeProfileComponent implements OnInit {
jobForm : FormGroup;
    blocked : boolean = false;
    isSubmitted : boolean = false;
    providers : any[] = [];
    accountTypes : SelectItem[];
    states : SelectItem[];
    yearRange : string;   
    loggedInUserEmail : string;
    usaStates : State[];
    titles: SelectItem[] = [{label:"Select Title", value:""}];
    today : Date;
     
    constructor(private formBuilder: FormBuilder, private service : EmployeeProfileService, private messageService: MessageService,private oktaAuth: OktaAuthService,private route : ActivatedRoute,private availablility:EnterAvailabilityService) { 
    }
    
    async ngOnInit() {
       this.blocked = true;
       this.availablility.disableElement(true);
       this.loggedInUserEmail = this.route.snapshot.paramMap.get('email');
       this.today = new Date();
       this.yearRange = (this.today.getFullYear()) + ':' + (this.today.getFullYear() + 30);
       this.getUsaStates();
       this.getProviders();
       this.accountTypes = environment.accountTypes;
        
       this.jobForm =  this.formBuilder.group({
            lastName : new FormControl('',Validators.required),
            firstName : new FormControl('',Validators.required),
            middleInitial: new FormControl(''),
            address: new FormControl('',Validators.required),
            city: new FormControl('',Validators.required),
            state: new FormControl('',Validators.required),
            zip: new FormControl('',Validators.compose([ Validators.required,Validators.pattern('[0-9]{5}')])),
            homePhone: new FormControl('',Validators.compose([Validators.required, Validators.pattern('[0-9]{3}[-][0-9]{3}[-][0-9]{4}')])),
            cellPhone: new FormControl('',Validators.compose([Validators.required, Validators.pattern('[0-9]{3}[-][0-9]{3}[-][0-9]{4}')])),
            cellPhoneProvider: new FormControl('',Validators.required),
            email: new FormControl(''),
            ssn: new FormControl('',Validators.compose([Validators.pattern('[0-9]{9}')])),
            adult: new FormControl('',Validators.required),
            emergencyContact: new FormControl('',Validators.required),
            emergencyPhone: new FormControl('',Validators.compose([Validators.required, Validators.pattern('[0-9]{3}[-][0-9]{3}[-][0-9]{4}')])),
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
            ref1FacilityName: new FormControl('',Validators.required),
            refAddress1: new FormControl('',Validators.required),
            refPhone1: new FormControl('',Validators.compose([Validators.required, Validators.pattern('[0-9]{3}[-][0-9]{3}[-][0-9]{4}')])),
            refName2: new FormControl('',Validators.required),
            refPosition2: new FormControl('',Validators.required),
            ref2FacilityName: new FormControl('',Validators.required),
            refAddress2: new FormControl('',Validators.required),
            refPhone2: new FormControl('',Validators.compose([Validators.required, Validators.pattern('[0-9]{3}[-][0-9]{3}[-][0-9]{4}')])),
            bankName : new FormControl('',Validators.required),
            bankAddress: new FormControl('',Validators.required),
            bankCity: new FormControl('',Validators.required),
            bankState: new FormControl('',Validators.required),
            bankZip: new FormControl('',Validators.compose([ Validators.required,Validators.pattern('[0-9]{5}')])),
            accountType: new FormControl('',Validators.required),
            accountNumber: new FormControl('',Validators.required),
            routingNumber: new FormControl('',Validators.required),
            id : new FormControl(''),
            idExpiry: new FormControl(''),
            medLicenseNumber: new FormControl(''),
            licenseState: new FormControl(''),
            medLicenseExpiry: new FormControl('')
           
       });
        
        if(this.loggedInUserEmail === null){
            let isAuthenticated = await this.oktaAuth.isAuthenticated();
            if(isAuthenticated){
                  this.oktaAuth.getUser().then(user => {
                    this.loggedInUserEmail  = user.preferred_username;
                    this.jobForm.controls['email'].setValue(this.loggedInUserEmail);
                    this.blocked = false;
              
              });
          } 
        } else {
            this.jobForm.controls['email'].setValue(this.loggedInUserEmail);
            this.blocked = false;
        }
        
       
        
        
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
        jobApp.cellPhoneProvider = this.jobForm.value.cellPhoneProvider;
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
        jobApp.ref1FacilityName = this.jobForm.value.ref1FacilityName;
        jobApp.refAddress1= this.jobForm.value.refAddress1;
        jobApp.refPhone1= this.jobForm.value.refPhone1;
        jobApp.refName2= this.jobForm.value.refName2;
        jobApp.refPosition2= this.jobForm.value.refPosition2;
        jobApp.ref2FacilityName =this.jobForm.value.ref2FacilityName;
        jobApp.refAddress2= this.jobForm.value.refAddress2;
        jobApp.refPhone2= this.jobForm.value.refPhone2;
        jobApp.bankName = this.jobForm.value.bankName;
        jobApp.bankAddress= this.jobForm.value.bankAddress;
        jobApp.bankCity= this.jobForm.value.bankCity;
        jobApp.bankState= this.jobForm.value.bankState;
        jobApp.bankZip= this.jobForm.value.bankZip;
        jobApp.accountType= this.jobForm.value.accountType;
        jobApp.accountNumber= this.jobForm.value.accountNumber;
        jobApp.routingNumber= this.jobForm.value.routingNumber;
        jobApp.id = this.jobForm.value.id;
        jobApp.idExpiry= this.checkDate(this.jobForm.value.idExpiry);
        jobApp.medLicenseNumber= this.jobForm.value.medLicenseNumber;
        jobApp.licenseState= this.jobForm.value.licenseState;
        jobApp.medLicenseExpiry= this.checkDate(this.jobForm.value.medLicenseExpiry);
       this.service.saveApplication(jobApp).subscribe(data => {
           this.blocked = false;
           this.isSubmitted = true;
       }, error => {
           this.blocked = false;
           this.messageService.add({severity:'error', summary:'Error', detail:'Application could not be saved'});
       })
   }
    
    checkDate(date : any){
        if(date !== ""){
            date = (date.getMonth()+1)+"-"+date.getDate()+"-"+date.getFullYear();
        }
        return date;
    }
    
   //to get easy access to fields
    get jobform() { 
        return this.jobForm.controls;
    }

    getProviders(){
        let cellProviders : any[] = [];
        cellProviders.push({label:"Select Provider", value:""});
        this.service.getAllProviders().subscribe(providersList =>{
            providersList.forEach(provider => {
                cellProviders.push({label:provider.providerName, value:provider.providerName});
            })
            this.providers = cellProviders;
        });
    }
    
    getUsaStates(){
        let usaStates : any[] = [];
        usaStates.push({label:"Select State", value:""});
        this.service.getAllUsaStates().subscribe(stateList =>{
            this.usaStates = stateList;
            stateList.forEach(state =>{
                usaStates.push({label:state.stateName, value:state.stateCode});
            })
        });
        this.states = usaStates;
    }
    
    getTitles(){
        let state = this.jobForm.value.state;
        this.titles = [];
        this.titles = [{label:"Select Title", value:""}];
        if(state !== ""){
            this.service.getTitlesByState(state).subscribe(titles => {
               titles.forEach(title => {
               this.titles.push({label:title.title, value:title.title});
           }); 
        });
        }
    }
    cancel(){
       this.availablility.disableElement(false); 
    }
    
}