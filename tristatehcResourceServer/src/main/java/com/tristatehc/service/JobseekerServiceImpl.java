package com.tristatehc.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tristatehc.dao.JobseekerRepository;
import com.tristatehc.dto.JobseekerDTO;
import com.tristatehc.entity.Jobseeker;
import com.tristatehc.mapper.UserMapper;

@Service
public class JobseekerServiceImpl implements JobseekerService {
	
	Logger logger = LoggerFactory.getLogger(JobseekerServiceImpl.class);
	
	@Autowired
	JobseekerRepository repository;

	@Override
	public JobseekerDTO saveJobApplication(JobseekerDTO jobApplication) {
		logger.info("Employee profile details : "+jobApplication);
		Jobseeker jobApp =  repository.save(UserMapper.INSTANCE.jobseekerDtoToJobseeker(jobApplication));
		return UserMapper.INSTANCE.jobseekersToJobseekersDto(jobApp);
	}

}	
