package com.tristatehc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tristatehc.dto.UserAvailabilityDTO;
import com.tristatehc.service.UserAvailabilityService;

@RestController()
public class UserAvailabilityController {
	
	@Autowired UserAvailabilityService service;
	
	@RequestMapping(path="/useravailability", method=RequestMethod.GET, produces= MediaType.APPLICATION_JSON_VALUE)
	public List<UserAvailabilityDTO> getAllUserAvailability(){
		return service.getAllUserAvailability();
	}

}
