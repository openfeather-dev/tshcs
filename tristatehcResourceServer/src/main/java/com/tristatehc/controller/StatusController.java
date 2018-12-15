package com.tristatehc.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tristatehc.dto.StatusDTO;
import com.tristatehc.service.StatusService;

@RestController
@RequestMapping("status")
public class StatusController {
	
	@Autowired
	StatusService service;
	
	@RequestMapping(path="/", method=RequestMethod.GET, produces= {MediaType.APPLICATION_JSON_VALUE})
	public List<StatusDTO> getAllStatuses(){
		return service.getAllStatus();
	}
	
	@RequestMapping(path="/{status}", method=RequestMethod.GET, produces= {MediaType.APPLICATION_JSON_VALUE})
	public StatusDTO getStatus(@PathVariable("status") String status) {
		Optional<StatusDTO> statusDto = service.getStatus(status);
		return statusDto.get();
	}

}
