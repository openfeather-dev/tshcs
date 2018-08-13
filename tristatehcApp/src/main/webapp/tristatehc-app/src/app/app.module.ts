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
import {DropdownModule} from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';
import {AuthGuardService as AuthGuard} from './auth/auth-guard.service';
import {LoginComponent} from './login/login.component';
import { UserRegisterationComponent } from './user-registeration/user-registeration.component';
import { OktaCallbackComponent, OktaAuthModule } from '@okta/okta-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth-interceptor';
import { HttpClientModule} from "@angular/common/http";
import { AvailabilityComponent } from './availability/availability.component';
import { CalendarModule as AngularCalendar } from 'angular-calendar';


const routes: Routes=[
                      {path:'',redirectTo: '/home', pathMatch: 'full'},
                      {path:'home',component:Home},
                      {path:'medicalstaffing',component:MedicalStaffing},
                      {path:'aboutus',component:Aboutus},
                      {path:'clients',component:Clients},
                      {path:'contact',component:Contact},
                      {path:'jobs',component:Jobs},
                      {path:'jobseekers',component:Jobseekers},
                      {path:'login',component:LoginComponent},
                      {path:'schedule',component:ScheduleComponent,canActivate: [AuthGuard]},
                      {path:'register',component:UserRegisterationComponent},
                      {path: 'implicit/callback',    component: OktaCallbackComponent},
                      {path: 'myAvailability',    component: AvailabilityComponent}
                       ];
                       
 const config = {
  				issuer: 'https://dev-444763.oktapreview.com/oauth2/default',
 				redirectUri: 'http://localhost:4200/implicit/callback',
  				clientId: '0oafuhs95vCjTXe6f0h7'
				};

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
    UserRegisterationComponent,
    AvailabilityComponent
    
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
    DropdownModule,
    CheckboxModule,
    AutoCompleteModule,
    FileUploadModule,
    InputMaskModule,
    ScheduleModule,
    CalendarModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    OktaAuthModule.initAuth(config),
    AngularCalendar.forRoot()
  ],
  providers: [AuthGuard,{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
