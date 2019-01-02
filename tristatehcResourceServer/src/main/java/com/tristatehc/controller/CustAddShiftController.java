package com.tristatehc.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tristatehc.dto.CustShiftDTO;
import com.tristatehc.service.CustAddShiftService;

@RestController
@RequestMapping("addshift")
public class CustAddShiftController {
	@Autowired
	private CustAddShiftService service;

	@RequestMapping(path="/shift/{custId}",method=RequestMethod.POST,produces={MediaType.APPLICATION_JSON_VALUE})
	public Map<String,String>getShifts(@RequestBody String date,@PathVariable("custId") String custId) {
		return service.getShifts(date,custId);
	}
	
	@RequestMapping(path="/",method=RequestMethod.POST,produces={MediaType.APPLICATION_JSON_VALUE} )
	public void saveShifts(@RequestBody CustShiftDTO shiftData) {
		service.saveShifts(shiftData);
	}
}
