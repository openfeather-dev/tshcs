package com.tristatehc.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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

	@Override
	public List<JobseekerDTO> getAllApplicants(){
		
		List<Jobseeker> employees = repository.findAllByOrderByFirstNameAsc();
		List<JobseekerDTO> employeesDto = new ArrayList<>();
		if(!employees.isEmpty()) {
			employeesDto = employees.stream().map(emp -> UserMapper.INSTANCE.jobseekersToJobseekersDto(emp)).collect(Collectors.toList());
		}
		return employeesDto;
		
	}

	@Override
	public Optional<JobseekerDTO> getApplicant(String email) {
		Optional<Jobseeker> applicantOptnl = repository.findById(email);
		if(applicantOptnl.isPresent()) {
			Jobseeker applicant = applicantOptnl.get();
			return Optional.of(UserMapper.INSTANCE.jobseekersToJobseekersDto(applicant));
		}
		return Optional.empty();
	}
}	
