import { Component, OnInit } from '@angular/core';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    private username :string;
    private password :string;
    
  constructor() {
      
  }

  ngOnInit() {
  }

  handleSubmit(event :any){
      console.log("username " + this.username);
      console.log("password " + this.password);
      sessionStorage.setItem("isAuthenticated","true")
  }
}
