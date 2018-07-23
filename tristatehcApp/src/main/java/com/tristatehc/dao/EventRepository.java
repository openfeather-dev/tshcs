package com.tristatehc.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tristatehc.entity.Event;

@Repository
public interface EventRepository extends JpaRepository<Event, String>{

}
