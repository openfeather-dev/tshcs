package com.tristatehc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tristatehc.dto.AvailabilityDTO;
import com.tristatehc.service.AvailabilityService;

@RestController()
@RequestMapping("availability")
public class AvailabilityController {
	
	@Autowired AvailabilityService availabilityService;
	
	@RequestMapping(path="/{emailId}",method=RequestMethod.POST,produces={MediaType.APPLICATION_JSON_VALUE})
	public List<AvailabilityDTO> addAvailabilities(@RequestBody List<AvailabilityDTO> availabilityDto,@PathVariable("emailId") String emailId){
		return availabilityService.addAvailability(availabilityDto);
		
	}
	
	@RequestMapping(path="/{empid}",method=RequestMethod.GET,produces={MediaType.APPLICATION_JSON_VALUE})
	public List<AvailabilityDTO> getAvailabilities(@PathVariable("empid") String empid){
		return availabilityService.getAvailabilities(empid);
		
	}
	
	@RequestMapping(path="/getAll", method=RequestMethod.GET,produces={MediaType.APPLICATION_JSON_VALUE})
	public List<AvailabilityDTO> getAllAvailabilities(){
		System.out.println("**AdminController***");
		return availabilityService.getAllAvailabilities();
	}
	

}
