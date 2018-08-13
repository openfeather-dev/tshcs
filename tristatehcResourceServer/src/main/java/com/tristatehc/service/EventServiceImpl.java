package com.tristatehc.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tristatehc.dao.EventRepository;
import com.tristatehc.dto.EventDTO;
import com.tristatehc.entity.Event;
import com.tristatehc.mapper.UserMapper;

@Service
public class EventServiceImpl implements EventService {

	@Autowired
	EventRepository eventRepository;

	@Override
	/*
	 * public EventDTO getEvent(String emailId) { //Optional<Event> eventOptional =
	 * eventRepository.findById(emailId); Optional<Event> event =
	 * eventRepository.findByEmail(emailId); EventDTO eventDto = new EventDTO() ;
	 * if(event.isPresent()) { eventDto =
	 * UserMapper.INSTANCE.eventToEventDto(event.get()); } return eventDto; }
	 */

	public EventDTO addEvent(Event event) {
		Event savedEvent = eventRepository.save(event);
		EventDTO eventDto = new EventDTO();
		eventDto = UserMapper.INSTANCE.eventToEventDto(savedEvent);
		return eventDto;
	}

	public EventDTO updateEvent(Event event) {
		System.out.println("***EventServiceImpl updateEvent***");
		Optional<Event> eventOptional = eventRepository.findById(event.getEventId());
		if(eventOptional.isPresent()) {
			System.out.println("***EventServiceImpl inside if present***");
			return addEvent(event);
		}
		return new EventDTO();
	}

	public List<EventDTO> getEvents(String email) {
		Optional<List<Event>> events = eventRepository.findByEmail(email);
		List<EventDTO> eventDto = new ArrayList<>();
		if (events.isPresent()) {
			eventDto = events.get().stream().map(userEvent -> UserMapper.INSTANCE.eventToEventDto(userEvent))
					.collect(Collectors.toList());
			return eventDto;
		}
		return eventDto;
	}

	@Override
	public void deleteEvent(int eventId) {
		eventRepository.deleteById(eventId);
	}

}
