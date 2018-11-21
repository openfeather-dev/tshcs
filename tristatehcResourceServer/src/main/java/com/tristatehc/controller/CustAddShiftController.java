package com.tristatehc.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tristatehc.dto.TitlesDTO;
import com.tristatehc.service.CustAddShiftService;

@RestController
@RequestMapping("addshift")
public class CustAddShiftController {
	@Autowired
	private CustAddShiftService service;

	@RequestMapping(path="/{state}",method=RequestMethod.GET,produces={MediaType.APPLICATION_JSON_VALUE})
	public List<TitlesDTO>getTitles(@PathVariable("state") String state) {
		return service.getTitles(state);
	}
	
	@RequestMapping(path="/shift/{custId}",method=RequestMethod.POST,produces={MediaType.APPLICATION_JSON_VALUE})
	public Map<String,String>getShifts(@RequestBody String date,@PathVariable("custId") String custId) {
								System.out.println("date @RequestBody  "+date);								
		return service.getShifts(date,custId);
		//return service.getTitles(state);
	}
}
