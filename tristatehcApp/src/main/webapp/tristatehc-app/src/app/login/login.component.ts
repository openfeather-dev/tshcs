import { Component, OnInit } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { OktaAuthService } from '@okta/okta-angular';
import { CoutryService } from '../../services/coutry.service';
import { User } from '../model/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    private id :string;
    private password :string;
    private user :User;
    
  constructor(private router: Router,private oktaAuth: OktaAuthService, private http: HttpClient) {
      
  }

  async ngOnInit() {
    console.log(this.oktaAuth.isAuthenticated());

        if(this.oktaAuth.isAuthenticated()){
        
            const accessToken = this.oktaAuth.getAccessToken();
            console.log("acccess token :"+this.oktaAuth.getAccessToken());
            this.oktaAuth.getUser().then(user => {
                console.log('user '+ user.email);
             //this.user = user;
                // console.log('the user object --- >' + JSON.stringify(user));
            });
           
          }
      
     
      
     
  }

  handleSubmit(event :any){
      console.log("id " + this.id);
      console.log("password " + this.password);
      sessionStorage.setItem("isAuthenticated","true");
      this.router.navigate(['schedule']);
  }
    
    
}
