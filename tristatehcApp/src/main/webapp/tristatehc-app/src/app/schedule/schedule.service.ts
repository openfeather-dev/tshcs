import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import { Event } from '../model/event';


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
 restItemsUrl = 'http://localhost:8090/event/';
 // restItemsUrl = 'https://reqres.in/api/users/';
    constructor(private http :HttpClient ) { }
    
    getEventByEmail(email :string ){
        console.log(this.restItemsUrl+email);
      return this.http
      .get<Event>(this.restItemsUrl+email);
    
    }
    
    addEvent(event:Event, email: string): Observable<Event>{
        
        return this.http.post<Event>(this.restItemsUrl+email,event);
    }
}
