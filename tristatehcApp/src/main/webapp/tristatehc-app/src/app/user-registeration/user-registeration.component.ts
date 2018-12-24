import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {environment} from '../../environments/environment';
import { OktaAuthService } from '@okta/okta-angular';
@Component({
  selector: 'app-user-registeration',
  templateUrl: './user-registeration.component.html',
  styleUrls: ['./user-registeration.component.css']
})

export class UserRegisterationComponent implements OnInit {
	private firstName:string;
	private middleName:string;
	private lastName:string;
	private email:string;
	private password:string;
	private reconfirmPassword:string;
	private signupUrl:string = environment.signupUrl;

  constructor(private router: Router,private oktaAuth: OktaAuthService) { }

  ngOnInit() {
  }	

	handleRegisteration(event :any){
		console.log("First Name "+this.firstName);
		console.log("Middle Name "+this.middleName);
		console.log("Last Name "+this.lastName);
		console.log("Email "+this.email);
		console.log("Password "+this.password);
		console.log("Reconfirm Password "+this.reconfirmPassword);
      
      	this.router.navigate(['login']);
  	}
  
  handleCancel(event : any){
  	this.router.navigate(['login']);
  	
  }
    login(){
        this.oktaAuth.loginRedirect();
    }
}
