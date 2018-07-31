import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}    from '@angular/forms'
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
import {FileUploadModule} from 'primeng/fileupload';
import {InputMaskModule} from 'primeng/inputmask';
import { ScheduleComponent } from './schedule/schedule.component';
import {ScheduleModule} from 'primeng/schedule';
import {DialogModule} from 'primeng/dialog';
import {CalendarModule} from 'primeng/calendar';
import {AuthGuardService as AuthGuard} from './auth/auth-guard.service';
import {LoginComponent} from './login/login.component';
import { UserRegisterationComponent } from './user-registeration/user-registeration.component';


const routes: Routes=[
                      {path:'',component:Home},
                      {path:'home',component:Home},
                      {path:'medicalstaffing',component:MedicalStaffing},
                      {path:'aboutus',component:Aboutus},
                      {path:'clients',component:Clients},
                      {path:'contact',component:Contact},
                      {path:'jobs',component:Jobs},
                      {path:'jobseekers',component:Jobseekers},
                      {path:'login',component:LoginComponent},
                      {path:'schedule',component:ScheduleComponent,canActivate: [AuthGuard]},
                      {path:'register',component:UserRegisterationComponent}
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
    Jobseekers,
    ScheduleComponent,
    LoginComponent,
    UserRegisterationComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    CommonModule,
    FormsModule,
    InputTextModule,
    InputTextareaModule,
    DialogModule,
    AutoCompleteModule,
    FileUploadModule,
    InputMaskModule,
    ScheduleModule,
    CalendarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
