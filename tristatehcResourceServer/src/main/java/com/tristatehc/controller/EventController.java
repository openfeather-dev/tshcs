package com.tristatehc.controller;

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
	public EventDTO getEvent(@PathVariable("emailId") String emailId) {
		EventDTO dto = new EventDTO();
		dto.setEmail("email@fromrealDB.com");
		return eventService.getEvent(emailId);
		//return dto;
	}
	
	@RequestMapping(path="/{emailId}",method=RequestMethod.POST,produces={MediaType.APPLICATION_JSON_VALUE})
	public EventDTO addEvent(@RequestBody Event event){
		return eventService.addEvent(event);
	}
	

}
