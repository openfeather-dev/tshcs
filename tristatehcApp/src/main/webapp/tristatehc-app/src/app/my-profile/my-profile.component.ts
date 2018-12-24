import { Component,OnInit,ViewEncapsulation } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { Data } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { MyProfileService } from './my-profile.service';
import { JobseekersData } from '../model/jobseekers-data';
import { State } from '../model/state';
import { CellPhoneProvider } from '../model/cell-phone-provider';
import {MessageService} from 'primeng/api';
import { environment } from '../../environments/environment';
import {SelectItem} from 'primeng/api';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
jobForm : FormGroup;
    blocked : boolean = false;
    providers : any[] = [];
    accountTypes : SelectItem[];
    states : SelectItem[];
    yearRange : string;   
    loggedInUserEmail : string;
    loggedInUser : string;
    usaStates : State[];
    titles: SelectItem[] = [{label:"Select Title", value:""}];
    today : Date;
    applicant : JobseekersData;
    currentStatus : string="";
    statusColor : string;
    disable : boolean = false;
    comments: string = "";
    rate : number = 0;
    myComments : string="";
    relation : string[] =[];
    
    constructor(private formBuilder: FormBuilder, private service : MyProfileService, private messageService: MessageService,private oktaAuth: OktaAuthService) { 
    }
    
    async ngOnInit() {
       this.blocked = true;
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
            email: new FormControl({value:'',disabled:true}),
            ssn: new FormControl('',Validators.compose([Validators.pattern('[0-9]{9}')])),
            adult: new FormControl('',Validators.required),
            id : new FormControl('',Validators.required),
            idExpiry: new FormControl('',Validators.required),
            medLicenseNumber: new FormControl('',Validators.required),
            licenseState: new FormControl('',Validators.required),
            medLicenseExpiry: new FormControl('',Validators.required),
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
            bankName : new FormControl(''),
            bankAddress: new FormControl(''),
            bankCity: new FormControl(''),
            bankState: new FormControl(''),
            bankZip: new FormControl('',Validators.compose([Validators.pattern('[0-9]{5}')])),
            accountType: new FormControl(''),
            accountNumber: new FormControl(''),
            routingNumber: new FormControl('')
           
       });
        
       let isAuthenticated = await this.oktaAuth.isAuthenticated();
            if(isAuthenticated){
                  this.oktaAuth.getUser().then(user => {
                    this.loggedInUserEmail  = user.preferred_username;
                    this.loggedInUser = user.name;
                    this.jobForm.patchValue({email: this.loggedInUserEmail});
                    this.service.getApplicantData(this.loggedInUserEmail).subscribe(info =>{
                        if(info != null){
                            this.currentStatus = info.status;
                            if(this.currentStatus == environment.onboardedStatus){
                                this.disable = true;
                            }
                            if(this.currentStatus != null && this.currentStatus != ""){
                                this.service.getStatus(this.currentStatus).subscribe( status =>{
                                this.statusColor = status.color;
                                });
                            }
                            this.getTitleToSetForm(info.state, info.positions);
                            this.setFormData(info);
                        }
                        this.blocked = false;     
                    });
              },error => {
                this.blocked = false;
                this.messageService.add({severity:'error', summary: 'Error', detail:'Profile could not be retrieved please try later!!'});
                
                });
          } 
        
        
    }
   
    
    
   onSubmit(){
        this.blocked = true;
        if (this.jobForm.invalid) {
            return;
        }
       
        let jobApp : JobseekersData;
        jobApp = new JobseekersData();
        jobApp.lastName = this.jobForm.getRawValue().lastName;
        jobApp.firstName = this.jobForm.getRawValue().firstName;
        jobApp.middleInitial= this.jobForm.getRawValue().middleInitial;
        jobApp.address= this.jobForm.getRawValue().address;
        jobApp.city= this.jobForm.getRawValue().city;
        jobApp.state= this.jobForm.getRawValue().state;
        jobApp.zip= this.jobForm.getRawValue().zip;
        jobApp.homePhone= this.jobForm.getRawValue().homePhone;
        jobApp.cellPhone= this.jobForm.getRawValue().cellPhone;
        jobApp.cellPhoneProvider = this.jobForm.getRawValue().cellPhoneProvider;
        jobApp.email= this.jobForm.getRawValue().email;
        jobApp.ssn= this.jobForm.getRawValue().ssn;
        jobApp.adult= this.jobForm.getRawValue().adult;
        jobApp.emergencyContact= this.jobForm.getRawValue().emergencyContact;
        jobApp.emergencyPhone= this.jobForm.getRawValue().emergencyPhone;
        jobApp.positions= this.jobForm.getRawValue().positions;
        jobApp.unavailable= this.jobForm.getRawValue().unavailable;
        jobApp.highSchoolName= this.jobForm.getRawValue().highSchoolName;
        jobApp.highSchoolAddress= this.jobForm.getRawValue().highSchoolAddress;
        jobApp.highSchoolYears= this.jobForm.getRawValue().highSchoolYears;
        jobApp.highSchoolDegree= this.jobForm.getRawValue().highSchoolDegree;
        jobApp.collegeName= this.jobForm.getRawValue().collegeName;
        jobApp.collegeAddress= this.jobForm.getRawValue().collegeAddress;
        jobApp.collegeYears= this.jobForm.getRawValue().collegeYears;
        jobApp.collegeDegree= this.jobForm.getRawValue().collegeDegree;
        jobApp.tradeName= this.jobForm.getRawValue().tradeName;
        jobApp.tradeAddress= this.jobForm.getRawValue().tradeAddress;
        jobApp.tradeYears= this.jobForm.getRawValue().tradeYears;
        jobApp.tradeDegree= this.jobForm.getRawValue().tradeDegree;
        jobApp.graduateName= this.jobForm.getRawValue().graduateName;
        jobApp.graduateAddress= this.jobForm.getRawValue().graduateAddress;
        jobApp.graduateYears= this.jobForm.getRawValue().graduateYears;
        jobApp.graduateDegree= this.jobForm.getRawValue().graduateDegree;
        jobApp.refName1= this.jobForm.getRawValue().refName1;
        jobApp.refPosition1= this.jobForm.getRawValue().refPosition1;
        jobApp.ref1FacilityName = this.jobForm.getRawValue().ref1FacilityName;
        jobApp.refAddress1= this.jobForm.getRawValue().refAddress1;
        jobApp.refPhone1= this.jobForm.getRawValue().refPhone1;
        jobApp.refName2= this.jobForm.getRawValue().refName2;
        jobApp.refPosition2= this.jobForm.getRawValue().refPosition2;
        jobApp.ref2FacilityName =this.jobForm.getRawValue().ref2FacilityName;
        jobApp.refAddress2= this.jobForm.getRawValue().refAddress2;
        jobApp.refPhone2= this.jobForm.getRawValue().refPhone2;
        jobApp.bankName = this.jobForm.getRawValue().bankName;
        jobApp.bankAddress= this.jobForm.getRawValue().bankAddress;
        jobApp.bankCity= this.jobForm.getRawValue().bankCity;
        jobApp.bankState= this.jobForm.getRawValue().bankState;
        jobApp.bankZip= this.jobForm.getRawValue().bankZip;
        jobApp.accountType= this.jobForm.getRawValue().accountType;
        jobApp.accountNumber= this.jobForm.getRawValue().accountNumber;
        jobApp.routingNumber= this.jobForm.getRawValue().routingNumber;
        jobApp.id = this.jobForm.getRawValue().id;
        jobApp.idExpiry= this.setDate(this.jobForm.getRawValue().idExpiry);
        jobApp.medLicenseNumber= this.jobForm.getRawValue().medLicenseNumber;
        jobApp.licenseState= this.jobForm.getRawValue().licenseState;
        jobApp.medLicenseExpiry= this.setDate(this.jobForm.getRawValue().medLicenseExpiry);
        jobApp.status = this.currentStatus;
        jobApp.comments = this.comments;
        jobApp.rate = this.rate;
        jobApp.myComments = this.myComments;
        jobApp.lastUpdatedBy = this.loggedInUser;
        jobApp.relation = this.relation;
        this.service.saveApplication(jobApp).subscribe(data => {
           this.blocked = false;
           this.messageService.add({severity:'success', summary:'Success', detail:'Your profile was successfully updated!!'});
       }, error => {
           this.blocked = false;
           this.messageService.add({severity:'error', summary:'Error', detail:'Your profile could not be saved.Please try later!!'});
       })
   }
    
   //To get easy access to fields
    get jobform() { 
        return this.jobForm.controls;
    }

    //Get all cell providers from database
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
    
    //Get all states from database
    getUsaStates(){
        let usaStates : any[] = [];
        usaStates.push({label:"Select State", value:""});
        this.service.getAllUsaStates().subscribe(stateList =>{
            stateList.forEach(state =>{
                usaStates.push({label:state.stateName, value:state.stateCode});
            })
        }, error=>{
            this.messageService.add({severity:'error', summary:'Error', detail:'Your profile could not be retrieved.Please try later!!'});
            this.blocked = false;
        });
        this.states = usaStates;
    }
    
    //Get titles from database corresponding to the state where the applicant lives
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
    
    //On applicant data retrieval from database set the retrieved title value in dropdown
    getTitleToSetForm(state:string,position:string){
        this.titles = [];
        this.service.getTitlesByState(state).subscribe(titles => {
            titles.forEach(title=> {
                    if(title.title === position){
                       this.titles = [{label:title.title, value:title.title}]; 
                    }
                });
            this.titles.push({label:"Select Title", value:""});
            titles.forEach(title => {
                
                if(title.title !== position){
                       this.titles.push({label:title.title, value:title.title}); 
                    }
            });
        });
        
    }
    
    
    setDate(date : any){
        if(date !== ""){
            date = (date.getMonth()+1)+"-"+date.getDate()+"-"+date.getFullYear();
        }
        return date;
    }
    
    //Set form data that is retrieved from database
    setFormData(data : JobseekersData){
        this.comments = data.comments;
        this.rate = data.rate;
        this.myComments = data.myComments;
        this.relation = data.relation;
        let idExpiry = new Date(data.idExpiry);
        let medLicenseExpiry = new Date(data.medLicenseExpiry);
        this.jobForm.setValue({lastName:data.lastName,
            firstName:data.firstName,
            middleInitial: data.middleInitial,
            address: data.address,
            city: data.city,
            state: data.state,
            zip: data.zip,
            homePhone: data.homePhone,
            cellPhone: data.cellPhone,
            cellPhoneProvider: data.cellPhoneProvider,
            ssn: data.ssn,
            adult: data.adult,
            id : data.id,
            idExpiry: idExpiry,
            email:data.email,
            medLicenseNumber: data.medLicenseNumber,
            licenseState: data.licenseState,
            medLicenseExpiry: medLicenseExpiry,
            emergencyContact: data.emergencyContact,
            emergencyPhone: data.emergencyPhone,
            positions: data.positions,
            unavailable: data.unavailable,
            highSchoolName: data.highSchoolName,
            highSchoolAddress: data.highSchoolAddress,
            highSchoolYears: data.highSchoolYears,
            highSchoolDegree: data.highSchoolDegree,
            collegeName: data.collegeName,
            collegeAddress: data.collegeAddress,
            collegeYears: data.collegeYears,
            collegeDegree: data.collegeDegree,
            tradeName: data.tradeName,
            tradeAddress:data.tradeAddress,
            tradeYears: data.tradeYears,
            tradeDegree: data.tradeDegree,
            graduateName: data.graduateName,
            graduateAddress: data.graduateAddress,
            graduateYears: data.graduateYears,
            graduateDegree: data.graduateDegree,
            refName1:data.refName1,
            refPosition1: data.refPosition1,
            ref1FacilityName: data.ref1FacilityName,
            refAddress1: data.refAddress1,
            refPhone1: data.refPhone1,
            refName2: data.refName2,
            refPosition2: data.refPosition2,
            ref2FacilityName: data.ref2FacilityName,
            refAddress2: data.refAddress2,
            refPhone2: data.refPhone2,
            bankName : data.bankName,
            bankAddress: data.bankAddress,
            bankCity: data.bankCity,
            bankState: data.bankState,
            bankZip: data.bankZip,
            accountType: data.accountType,
            accountNumber: data.accountNumber,
            routingNumber: data.routingNumber
        
        });
        
    }
    
        
}
