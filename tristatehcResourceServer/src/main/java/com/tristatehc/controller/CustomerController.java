package com.tristatehc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tristatehc.dto.CustomerDTO;
import com.tristatehc.service.CustomerService;

@RestController
@RequestMapping("customer")
public class CustomerController {
	
	@Autowired
	CustomerService service;
	
	@RequestMapping(path="/", method=RequestMethod.GET, produces={MediaType.APPLICATION_JSON_VALUE})
	public List<CustomerDTO> getAllCustomers(){
		return service.getAllCustomers();
		
	}

}
