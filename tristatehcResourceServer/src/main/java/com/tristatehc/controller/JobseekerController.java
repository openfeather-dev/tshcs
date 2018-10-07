package com.tristatehc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.tristatehc.dto.JobseekerDTO;
import com.tristatehc.service.JobseekerService;

@RestController()
@RequestMapping("job")
public class JobseekerController {
	@Autowired
	JobseekerService jobService;
	
	@RequestMapping(path="/apply",method=RequestMethod.POST,consumes={MediaType.APPLICATION_JSON_VALUE})
	public JobseekerDTO saveApplication(@RequestBody JobseekerDTO jobseekerDto) {
		System.out.println(jobseekerDto);
		return jobService.saveJobApplication(jobseekerDto);
	}
	
}
