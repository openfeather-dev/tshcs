import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shift } from '../model/shift';


@Injectable({
  providedIn: 'root'
})
export class ShiftDetailsService {

 shifts:Shift[];
  constructor(private http: HttpClient) { 
  
  
  
  }
  
  getShiftDetails() {
        /*return this.http.get('/showcase/resources/data/cars-small.json')
                    .toPromise()
                    .then(res => <Shift[]> res.json().data)
                    .then(data => { return data; });
                    */
                    return this.shifts;
    }
}
