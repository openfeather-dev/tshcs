package com.tristatehc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tristatehc.dto.CellPhoneProviderDTO;
import com.tristatehc.service.CellPhoneProviderService;

@RestController
@RequestMapping("/provider")
public class CellPhoneProviderController {
	
	@Autowired
	CellPhoneProviderService providerService;
	
	@RequestMapping(path="/", method=RequestMethod.GET, produces={MediaType.APPLICATION_JSON_VALUE})
	public List<CellPhoneProviderDTO> getFilteredProviders(){
		return providerService.getFilteredProviders();
	}

}
