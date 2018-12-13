package com.tristatehc.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tristatehc.dto.TitlesDTO;
import com.tristatehc.service.TitleService;

@RestController
@RequestMapping("title")
public class TitleController {
	
	@Autowired
	TitleService service;
	
	@RequestMapping(path="/{state}",method=RequestMethod.GET,produces={MediaType.APPLICATION_JSON_VALUE})
	public List<TitlesDTO>getTitles(@PathVariable("state") String state) {
		return service.getTitleByState(state);
	}
}
