package com.tristatehc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tristatehc.dto.CustomerShiftConfigurationDTO;
import com.tristatehc.service.CustShiftConfigService;

@RestController
@RequestMapping("shiftconfiguration")
public class CostumerShiftConfigurationController {
	
	@Autowired
	CustShiftConfigService configService;
	
	@RequestMapping(path="/{clientId}",method=RequestMethod.GET,produces={MediaType.APPLICATION_JSON_VALUE})
	public List<CustomerShiftConfigurationDTO> getCustomerShiftConfig(@PathVariable("clientId") String clientId){
		
		return configService.getCustShiftConfig(clientId);
	}
	
	@RequestMapping(path="/{clientId}",method=RequestMethod.POST,produces={MediaType.APPLICATION_JSON_VALUE})
	public List<CustomerShiftConfigurationDTO> saveCustomerShiftConfig(@PathVariable("clientId") String clientId, @RequestBody List<CustomerShiftConfigurationDTO> configDto){
		return configService.addShiftsConfig(configDto);
	}

}
