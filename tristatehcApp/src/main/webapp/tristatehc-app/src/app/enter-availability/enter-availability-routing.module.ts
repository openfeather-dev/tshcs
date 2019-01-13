import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule}    from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { OktaAuthGuard } from '@okta/okta-angular';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import { CalendarModule as AngularCalendar} from 'angular-calendar';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule } from 'primeng/calendar';
import { EnterAvailabilityComponent } from './enter-availability.component';
import {EmployeeAvailabilityComponent } from '../employee-availability/employee-availability.component';
import { CustomerShiftConfigurationComponent } from '../customer-shift-configuration/customer-shift-configuration.component';
import { CustomerOptionsComponent } from '../customer-options/customer-options.component';
import { CustomerAddShiftsComponent } from '../customer-add-shifts/customer-add-shifts.component';
import {ProgressBarModule} from 'primeng/progressbar';
import {BlockUIModule} from 'primeng/blockui';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import { CalendarUtilsModule } from '../../calendar-utils/calendar-utils.module';
import {KeyFilterModule} from 'primeng/keyfilter';
import { EmployeeProfileComponent } from '../employee-profile/employee-profile.component';
import { AssignShiftsComponent } from '../assign-shifts/assign-shifts.component';
import {AccordionModule} from 'primeng/accordion';
import {DialogModule} from 'primeng/dialog';
import {MultiSelectModule} from 'primeng/multiselect';



const enterAvailabilityRoutes: Routes = [{path: 'admin', component: EnterAvailabilityComponent, canActivate: [OktaAuthGuard] , 
                                            children: [{path:'employee/:email', component: EmployeeAvailabilityComponent, canActivate: [ OktaAuthGuard]},
                                                       {path:'customer/:facname/:name/:city/:state', component: CustomerOptionsComponent,canActivate: [ OktaAuthGuard],
                                                            children:[{path:'config/:clientid', component: CustomerShiftConfigurationComponent, canActivate: [ OktaAuthGuard] },
                                                                       {path:'addShifts/:state/:clientid', component:CustomerAddShiftsComponent, canActivate: [ OktaAuthGuard]},
                                                                       {path:'assignShifts/:clientId', component:AssignShiftsComponent, canActivate: [ OktaAuthGuard]}]
                                                      },{path:'newemployee/:email', component: EmployeeProfileComponent, canActivate: [ OktaAuthGuard]}]
                                          
                                          }];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    TableModule,
    RadioButtonModule,
    CheckboxModule,
    DropdownModule,
    InputTextareaModule,
    InputTextModule,
    CalendarUtilsModule,
    CalendarModule,
    ProgressBarModule,
    AngularCalendar,
    BlockUIModule,
    ToastModule,
    KeyFilterModule,
    AccordionModule,
    DialogModule,
    MultiSelectModule,
    RouterModule.forChild(enterAvailabilityRoutes)
  ],
  exports: [RouterModule ],
  declarations: [
    EnterAvailabilityComponent,
    EmployeeAvailabilityComponent,
    CustomerShiftConfigurationComponent,
    CustomerOptionsComponent,
    CustomerAddShiftsComponent,
    AssignShiftsComponent
      ],
  providers:[MessageService]
})
    
export class EnterAvailabilityRoutingModule { }
