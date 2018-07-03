import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MedicalStaffing} from '../medical-staffing/staffing.component';
import { Home} from '../home/home.component';
import { Aboutus} from '../about-us/aboutus.component';
import { Clients} from '../clients/clients.component';
import { Contact} from '../contact/contact.component';
import { Jobs} from '../jobs/jobs.component';
import { Jobseekers} from '../jobseekers/jobseekers.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {AutoCompleteModule} from 'primeng/autocomplete';

const routes: Routes=[
                      {path:'',component:Home},
                      {path:'home',component:Home},
                      {path:'medicalstaffing',component:MedicalStaffing},
                      {path:'aboutus',component:Aboutus},
                      {path:'clients',component:Clients},
                      {path:'contact',component:Contact},
                      {path:'jobs',component:Jobs},
                      {path:'jobseekers',component:Jobseekers},
                       ];

@NgModule({
  declarations: [
    AppComponent,
    Home,
    MedicalStaffing,
    Aboutus,
    Clients,
    Contact,
    Jobs,
    Jobseekers
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    AutoCompleteModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
