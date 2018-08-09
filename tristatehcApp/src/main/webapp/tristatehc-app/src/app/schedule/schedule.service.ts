import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import { Event } from '../model/event';


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
    baseUrl = 'http://localhost:8090/event/';
 // restItemsUrl = 'https://reqres.in/api/users/';
    constructor(private http :HttpClient ) { }
    
    getEventByEmail(email :string ){
        console.log(this.baseUrl+email);
      return this.http
      .get<Event>(this.baseUrl+email);
    
    }
    
    addEvent(event:Event, email: string): Observable<Event>{
        
        return this.http.post<Event>(this.baseUrl+email,event);
    }
    
    
    //Start: Event operations for nurses
    getUserEvents(email:string) {
      return this.http.get<Event[]>(this.baseUrl+email);   
    }
          
    saveUserEvent(event: Event) {
        console.log(event.email);
        return this.http.post(this.baseUrl+event.email, event);
    
    }      
          
    
    deleteUserEvent(eventId:number){
         return this.http.delete<Event>(this.baseUrl+eventId);   
        }
    //End: Event operations for nurses
    
        
    
}
