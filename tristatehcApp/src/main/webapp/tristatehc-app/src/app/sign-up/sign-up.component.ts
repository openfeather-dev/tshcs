import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { OktaAuthService } from '@okta/okta-angular';
import { User } from '../model/user';
import {SignupserviceService} from './signupservice.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

    jobForm : FormGroup;
    userobj:User;
    
    
  constructor(private formBuilder: FormBuilder,private oktaAuth: OktaAuthService,private signupService:SignupserviceService) { }

  ngOnInit() {
      
       this.jobForm =  this.formBuilder.group({
            email: new FormControl('',Validators.compose([Validators.required, Validators.email])),
            password: new FormControl('',Validators.compose([Validators.required, Validators.minLength(5)])),
            phone : new FormControl('',Validators.required),
            lastName : new FormControl('',Validators.required),
            firstName : new FormControl('',Validators.required),
            middleName: new FormControl('')
           
       });
  }
    
    handleRegisteration(event :any){
        
       // this.router.navigate(['login']);
    }
  
  handleCancel(event : any){
    //this.router.navigate(['login']);
    
  }
     login(){
        this.oktaAuth.loginRedirect();
    }
     //to get easy access to fields
    get jobform() { 
        return this.jobForm.controls;
    }
    
    onSubmit(){
        console.log("onSubmit()-------dd---->");
       let userInfo:User = new User();
         var jsonData = {};
         var credentials ={
          "password":{
          "value":  this.jobForm.value.password  
          }  
        };
        userInfo.firstName=this.jobForm.value.firstName;
        userInfo.lastName=this.jobForm.value.lastName;
        userInfo.email=this.jobForm.value.email;
        userInfo.login=this.jobForm.value.login;
        userInfo.mobilePhone=this.jobForm.value.mobilePhone;
        //this.userobj 
        jsonData["profile"]=userInfo;
        jsonData["credentials"]=credentials;
        this.signupService.createUserInOkta(jsonData).subscribe(userAvailabilities => {
           console.log("userAvailabilities" +userAvailabilities);
        }, error =>{
            console.log("error" +error);
        });

}
    }
