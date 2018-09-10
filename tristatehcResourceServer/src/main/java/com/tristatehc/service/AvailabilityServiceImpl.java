package com.tristatehc.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tristatehc.dao.AvailabilityRepository;
import com.tristatehc.dto.AvailabilityDTO;
import com.tristatehc.dto.UserProfileDTO;
import com.tristatehc.entity.Availability;
import com.tristatehc.mapper.UserMapper;

@Service
public class AvailabilityServiceImpl implements AvailabilityService {

	@Autowired
	AvailabilityRepository repository;
	@Autowired  UserService userService;
	
	@Override
	public List<AvailabilityDTO> addAvailability(List<AvailabilityDTO> availabilityDto, String emailId) {
		
		/*Find employee id from email id */
		UserProfileDTO user = userService.getUserProfile(emailId).get();
		availabilityDto.forEach(availability -> availability.setEmpId(user.getEmpId()));
		
		/*
		 * Get list of availabilities already stored in database to compare with the new
		 * list in order to find deleted availabilities
		 */
		List<AvailabilityDTO> existingAvailabilities = getAvailabilities(emailId);
		existingAvailabilities.removeAll(availabilityDto);

		// Remove deleted availabilities
		List<Availability> toBedeleted = existingAvailabilities.stream()
										.map(dto -> UserMapper.INSTANCE.availabilityDtoToAvailability(dto)).collect(Collectors.toList());
		repository.deleteAll(toBedeleted);

		// Save availabilities
		List<Availability> availabilities = availabilityDto.stream()
											.map(dto -> UserMapper.INSTANCE.availabilityDtoToAvailability(dto)).collect(Collectors.toList());
		List<Availability> savedAvailabilities = repository.saveAll(availabilities);
		List<AvailabilityDTO> availDto = savedAvailabilities.stream()
											.map(avail -> UserMapper.INSTANCE.availabilityToAvailabilityDto(avail)).collect(Collectors.toList());
		return availDto;
	}

	public List<AvailabilityDTO> getAvailabilities(String emailId) {
		
		/*Find employee id from email id */
		System.out.println("****EmailId****"+emailId);
		UserProfileDTO user = userService.getUserProfile(emailId).get();
		
		List<Availability> savedAvailabilities = repository.findAllByAvailabilityId_empId(user.getEmpId());

		List<AvailabilityDTO> availDto = savedAvailabilities.stream()
				.map(avail -> UserMapper.INSTANCE.availabilityToAvailabilityDto(avail)).collect(Collectors.toList());
		return availDto;
	}

	public List<AvailabilityDTO> getAllAvailabilities() {
		List<Availability> savedAvailabilities = repository.findAll();
		List<AvailabilityDTO> availDto = savedAvailabilities.stream()
				.map(avail -> UserMapper.INSTANCE.availabilityToAvailabilityDto(avail)).collect(Collectors.toList());
		return availDto;
	}

}
