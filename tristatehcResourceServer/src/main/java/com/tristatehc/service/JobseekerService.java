package com.tristatehc.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tristatehc.dto.JobseekerDTO;

@Service
public interface JobseekerService {
	public JobseekerDTO saveJobApplication(JobseekerDTO jobApplication);
	public List<JobseekerDTO> getAllApplicants();

}
