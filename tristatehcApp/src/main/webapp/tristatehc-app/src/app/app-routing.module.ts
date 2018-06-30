/**
 * routing typescript :Kurian Mathew
 */
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AppComponent} from './app.component';
import { MedicalStaffing} from '../medical-staffing/staffing.component';

const routes: Routes=[
                     {path:'',component:AppComponent},
                     {path:'medicalstaffing',component:MedicalStaffing}
                      ];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule ],
    providers: [],
  })
  
  export class AppRoutingModule{}