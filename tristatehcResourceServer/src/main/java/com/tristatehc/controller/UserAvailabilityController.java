package com.tristatehc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tristatehc.dto.UserAvailabilitySearchCriteria;
import com.tristatehc.entity.AvailabilityData;
import com.tristatehc.service.UserAvailabilityService;

@RestController()
@RequestMapping("useravailability")
public class UserAvailabilityController {
	
	@Autowired UserAvailabilityService service;
	
		
	@RequestMapping(path="/search", method=RequestMethod.POST, produces= MediaType.APPLICATION_JSON_VALUE)
	public List<AvailabilityData> userAvailabilityOrSearch(@RequestBody UserAvailabilitySearchCriteria searchCriteria){
		System.out.println(searchCriteria);
		return service.getAllUserAvailability(searchCriteria);
	}

}
