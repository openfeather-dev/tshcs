package com.tristatehc.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tristatehc.dao.FacilityRelationRepository;
import com.tristatehc.dao.JobseekerRepository;
import com.tristatehc.dto.JobseekerDTO;
import com.tristatehc.entity.FacilityRelation;
import com.tristatehc.entity.Jobseeker;
import com.tristatehc.mapper.UserMapper;

@Service
public class JobseekerServiceImpl implements JobseekerService {
	
	Logger logger = LoggerFactory.getLogger(JobseekerServiceImpl.class);
	
	@Autowired
	JobseekerRepository repository;
	
	@Autowired
	FacilityRelationRepository relationRepository;

	@Override
	public JobseekerDTO saveJobApplication(JobseekerDTO jobApplication) {
		logger.info("Employee profile details : "+jobApplication);
		List<FacilityRelation> relations = jobApplication.getRelation();
		List<FacilityRelation> existingRelations = getExistingRelation(jobApplication.getEmail());
		List<FacilityRelation> newRelations= relations.stream().filter(relation ->!existingRelations.contains(relation)).collect(Collectors.toList());
		List<FacilityRelation> deleteRelations = existingRelations.stream().filter(relation ->!relations.contains(relation)).collect(Collectors.toList());
		jobApplication.setRelation(newRelations);
		deleteRelations.forEach(rel -> relationRepository.delete(rel));
		Jobseeker jobApp =  repository.save(UserMapper.INSTANCE.jobseekerDtoToJobseeker(jobApplication));
		return UserMapper.INSTANCE.jobseekersToJobseekersDto(jobApp);
	}
	
	public List<FacilityRelation> getExistingRelation(String email){
		List<FacilityRelation> existingRelation = new ArrayList<>();
		if(!relationRepository.findAllByCandidateId(email).isEmpty()) {
			existingRelation = relationRepository.findAllByCandidateId(email);
		}
		return existingRelation;
	}
	
	@Override
	public List<JobseekerDTO> getAllApplicants(){
		
		List<Jobseeker> employees = repository.findAllByOrderByFirstNameAsc();
		List<JobseekerDTO> employeesDto = new ArrayList<>();
		if(!employees.isEmpty()) {
			employeesDto = employees.stream().map(emp -> {
				JobseekerDTO jobseekerdto = new JobseekerDTO();
				jobseekerdto.setEmail(emp.getEmail());
				jobseekerdto.setFirstName(emp.getFirstName());
				jobseekerdto.setLastName(emp.getLastName());
				return jobseekerdto;
			}).collect(Collectors.toList());
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
