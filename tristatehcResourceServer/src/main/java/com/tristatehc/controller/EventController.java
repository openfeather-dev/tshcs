package com.tristatehc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tristatehc.dto.EventDTO;
import com.tristatehc.entity.Event;
import com.tristatehc.service.EventService;

//@CrossOrigin(origins = "http://localhost:4200")
@RestController()
@RequestMapping("event")
public class EventController {
	
	@Autowired EventService eventService ; 
	
	//@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(path="/{emailId}",method=RequestMethod.GET,produces={MediaType.APPLICATION_JSON_VALUE})
	public List<EventDTO> getEvent(@PathVariable("emailId") String emailId) {
		return eventService.getEvents(emailId);
	}
	
	@RequestMapping(path="/{emailId}",method=RequestMethod.POST,produces={MediaType.APPLICATION_JSON_VALUE})
	public EventDTO addEvent(@RequestBody Event event,@PathVariable("emailId") String emailId){
		return eventService.addEvent(event);
	}
	
	
	@RequestMapping(path="/{eventId}",method=RequestMethod.DELETE)
	public void deleteEvent(@PathVariable("eventId") int eventId){
		eventService.deleteEvent(eventId);
	}
	
	@RequestMapping(path="/{emailId}",method=RequestMethod.PUT)
	public EventDTO updateEvent(@RequestBody Event event){
		System.out.println("***EventController***");
		return eventService.updateEvent(event);
	}
	

}
