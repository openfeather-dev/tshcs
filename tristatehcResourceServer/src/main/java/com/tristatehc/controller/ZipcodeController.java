package com.tristatehc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tristatehc.dto.ZipcodeDTO;
import com.tristatehc.service.ZipcodeService;

@RestController
@RequestMapping("zipcode")
public class ZipcodeController {
	@Autowired
	ZipcodeService service;
	
	@RequestMapping(path="/{query}", method=RequestMethod.GET, produces={MediaType.APPLICATION_JSON_VALUE})
	public List<ZipcodeDTO> getZipcodes(@PathVariable("query") String query){
		return service.getZipcodes(query);
	}

}
