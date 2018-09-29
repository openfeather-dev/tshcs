package com.tristatehc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tristatehc.dao.UserAvailabilityRepository;
import com.tristatehc.entity.AvailabilityData;

@Service
public class UserAvailabilityServiceImpl implements UserAvailabilityService {
	
	@Autowired UserAvailabilityRepository repository;

	/*@Override
	public List<UserAvailabilityDTO> getAllUserAvailability() {
		List<UserAvailabilityProjection> projection = repository.findAllAvailabilityForProjection();
		List<UserAvailabilityDTO> dto = projection.stream().map( proj -> UserMapper.INSTANCE.userAvailabilityProjectionToUserAvailabilityDto(proj)).collect(Collectors.toList());
		return dto;
	}*/
	
	public List<AvailabilityData> getAllUserAvailability(){
		return repository.getViewResult();
	}

}
