package com.tristatehc.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tristatehc.dao.EventRepository;
import com.tristatehc.dto.EventDTO;
import com.tristatehc.entity.Event;
import com.tristatehc.mapper.UserMapper;

@Service
public class EventServiceImpl implements EventService{

	@Autowired EventRepository eventRepository;
	
	@Override
	public EventDTO getEvent(String emailId) {
		Optional<Event> eventOptional =  eventRepository.findById(emailId);
		EventDTO event = new EventDTO() ;
		if(eventOptional.isPresent()) {
			event = UserMapper.INSTANCE.eventToEventDto(eventOptional.get());
		}
		return event;
	}
	
	public EventDTO addEvent (Event event) {
		Event newEvent =  eventRepository.save(event);
		EventDTO eventDto = new EventDTO() ;
		eventDto = UserMapper.INSTANCE.eventToEventDto(newEvent);
		return eventDto;
	}
	
	/*public List<EventDTO> getEvents(String email) {
		List<Event> events =  eventRepository.findByEmail(email);
		List<EventDTO> eventDto = new ArrayList<>() ;
		if(!events.isEmpty()) {
			eventDto = events.stream().map(userEvent -> UserMapper.INSTANCE.eventToEventDto(userEvent)).collect(Collectors.toList());
			return eventDto;
		}
		return eventDto;
	}*/

}
