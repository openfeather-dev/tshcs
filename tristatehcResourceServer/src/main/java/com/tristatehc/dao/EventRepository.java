package com.tristatehc.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tristatehc.entity.Event;

@Repository
public interface EventRepository extends JpaRepository<Event, Integer>{
	
	Optional<List<Event>> findByEmail(String email);
		
}
