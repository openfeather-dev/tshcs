package com.tristatehc.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tristatehc.dao.JobseekerRepository;
import com.tristatehc.dto.JobseekerDTO;
import com.tristatehc.entity.Jobseeker;
import com.tristatehc.mapper.UserMapper;

@Service
public class JobseekerServiceImpl implements JobseekerService {
	@Autowired
	JobseekerRepository repository;

	@Override
	public JobseekerDTO saveJobApplication(JobseekerDTO jobApplication) {
		System.out.println(jobApplication);
		Jobseeker jobApp =  repository.save(UserMapper.INSTANCE.jobseekerDtoToJobseeker(jobApplication));
		return UserMapper.INSTANCE.jobseekersToJobseekersDto(jobApp);
	}

}
