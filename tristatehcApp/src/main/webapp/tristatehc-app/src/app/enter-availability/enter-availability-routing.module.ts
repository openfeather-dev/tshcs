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
import {CalendarModule } from 'primeng/calendar';
import { EnterAvailabilityComponent } from './enter-availability.component';
import {EmployeeAvailabilityComponent } from '../employee-availability/employee-availability.component';
import { CustomerShiftConfigurationComponent } from '../customer-shift-configuration/customer-shift-configuration.component';
import { CustomerOptionsComponent } from '../customer-options/customer-options.component';
import { CustomerAddShiftsComponent } from '../customer-add-shifts/customer-add-shifts.component';


const enterAvailabilityRoutes: Routes = [{path: 'enterAvailability', component: EnterAvailabilityComponent, canActivate: [OktaAuthGuard] , 
                                            children: [{path:'employee/:email', component: EmployeeAvailabilityComponent},
                                                       {path:'customer/:id', component: CustomerOptionsComponent,
                                                            children:[{path:'config', component: CustomerShiftConfigurationComponent },
                                                                       {path:'addShifts', component:CustomerAddShiftsComponent}]
                                                      }]
                                          
                                          }];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    TableModule,
    RadioButtonModule,
    CheckboxModule,
    CalendarModule,
    AngularCalendar,
    RouterModule.forChild(enterAvailabilityRoutes)
  ],
  exports: [RouterModule ],
  declarations: [
    EnterAvailabilityComponent,
    EmployeeAvailabilityComponent,
    CustomerShiftConfigurationComponent,
    CustomerOptionsComponent,
    CustomerAddShiftsComponent
      ]
})
    
export class EnterAvailabilityRoutingModule { }
