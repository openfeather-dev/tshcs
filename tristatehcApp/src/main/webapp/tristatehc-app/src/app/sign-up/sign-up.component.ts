import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { OktaAuthService } from '@okta/okta-angular';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

    jobForm : FormGroup;
    
    
  constructor(private formBuilder: FormBuilder,private oktaAuth: OktaAuthService) { }

  ngOnInit() {
      
       this.jobForm =  this.formBuilder.group({
            email: new FormControl('',Validators.compose([Validators.required, Validators.email])),
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
    

}
