package com.tristatehc.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tristatehc.dao.UserAvailabilityRepository;
import com.tristatehc.dto.UserAvailabilityDTO;
import com.tristatehc.entity.UserAvailabilityProjection;
import com.tristatehc.mapper.UserMapper;

@Service
public class UserAvailabilityServiceImpl implements UserAvailabilityService {
	
	@Autowired UserAvailabilityRepository repository;

	@Override
	public List<UserAvailabilityDTO> getAllUserAvailability() {
		List<UserAvailabilityProjection> projection = repository.findAllAvailabilityForProjection();
		List<UserAvailabilityDTO> dto = projection.stream().map( proj -> UserMapper.INSTANCE.userAvailabilityProjectionToUserAvailabilityDto(proj)).collect(Collectors.toList());
		return dto;
	}

}
