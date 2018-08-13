package com.tristatehc.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tristatehc.dto.EventDTO;
import com.tristatehc.entity.Event;

@Service
public interface EventService {
	
	//public EventDTO getEvent (String emailId);
	public EventDTO addEvent (Event event);
	public EventDTO updateEvent(Event event);
	public List<EventDTO> getEvents(String email);
	public void deleteEvent (int eventId);
	

}
