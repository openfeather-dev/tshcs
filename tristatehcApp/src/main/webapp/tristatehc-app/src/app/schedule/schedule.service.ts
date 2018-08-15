import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Event } from '../model/event';


@Injectable({
    providedIn: 'root'
})
export class ScheduleService {
    //TODO remove hard coded base url value
    baseUrl = 'http://localhost:8090/event/';

    constructor(private http: HttpClient) { }

    /**
     * Method to get all user events from rest api
     */
    getUserEvents(email: string) {
        return this.http.get<Event[]>(this.baseUrl + email);
    }

    /**
     * Method to save a user event
     */
    saveUserEvent(event: Event) {
        return this.http.post(this.baseUrl + event.email, event);

    }
    
    /**
     * Method to update a user event
     */
    updateUserEvent(event: Event){
        console.log(this.baseUrl + event.email);
        return this.http.put(this.baseUrl + event.email,event);
    }

    /**
     * Method to delete a user event
     */
    deleteUserEvent(eventId: number) {
        return this.http.delete<Event>(this.baseUrl + eventId);
    }
    
    getUsers(selectedDate : string){
    return this.http.get("http://localhost:8090/userinfo");
    
    }
    

}
