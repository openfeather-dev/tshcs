package com.tristatehc.service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
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
		List<AvailabilityDTO> availDto = new ArrayList<>();
		/*Find employee id from email id */
		UserProfileDTO user = userService.getUserProfile(emailId).get();
		availabilityDto.forEach(availability -> {
			availability.setEmpId(user.getEmpId());
			});
		/*
		 * Get list of availabilities already stored in database to compare with the new
		 * list in order to find deleted availabilities
		 */
		List<AvailabilityDTO> existingAvailabilities = getAvailabilities(emailId);
		List<AvailabilityDTO> newAvailabilities = availabilityDto.stream().filter(dto -> !existingAvailabilities.contains(dto)).collect(Collectors.toList());
		existingAvailabilities.removeAll(availabilityDto);

		// Remove deleted availabilities
		List<Availability> toBedeleted = existingAvailabilities.stream().filter(dto-> dto.getAvailDate() != null && dto.getAvailTime() != null)
										.map(dto -> UserMapper.INSTANCE.availabilityDtoToAvailability(dto)).collect(Collectors.toList());
		repository.deleteAll(toBedeleted);
		
		if(!availabilityDto.isEmpty() && !emailId.isEmpty()) {
			// Save availabilities
			UserProfileDTO loggedInUser = userService.getUserProfile(availabilityDto.get(0).getEnterBySource()).get();
			LocalDate today = LocalDate.now();
			newAvailabilities.forEach(availability -> {
				availability.setEnterBySource(loggedInUser.getFname()+" "+ loggedInUser.getLname());
				availability.setEnterTime(Date.valueOf(today));
			});
			List<Availability> availabilities = newAvailabilities.stream()
												.map(dto -> UserMapper.INSTANCE.availabilityDtoToAvailability(dto)).collect(Collectors.toList());
			List<Availability> savedAvailabilities = repository.saveAll(availabilities);
			availDto = savedAvailabilities.stream()
												.map(avail -> UserMapper.INSTANCE.availabilityToAvailabilityDto(avail)).collect(Collectors.toList());
		}
		return availDto;
	}

	public List<AvailabilityDTO> getAvailabilities(String emailId) {
		
		/*Find employee id from email id */
		UserProfileDTO user = userService.getUserProfile(emailId).get();
		
		List<Availability> savedAvailabilities = repository.findAllByAvailabilityId_empId(user.getEmpId());

		List<AvailabilityDTO> availDto = savedAvailabilities.stream()
				.map(avail -> UserMapper.INSTANCE.availabilityToAvailabilityDto(avail)).collect(Collectors.toList());
		if(!availDto.isEmpty()) {
			availDto.get(0).setEmployeeName(user.getFname()+" "+user.getLname());
		} else {
			AvailabilityDTO dto = new AvailabilityDTO();
			dto.setEmployeeName(user.getFname()+" "+user.getLname());
			availDto.add(dto);
		}
		
		return availDto;
	}

	public List<AvailabilityDTO> getAllAvailabilities() {
		List<Availability> savedAvailabilities = repository.findAll();
		List<AvailabilityDTO> availDto = savedAvailabilities.stream()
				.map(avail -> UserMapper.INSTANCE.availabilityToAvailabilityDto(avail)).collect(Collectors.toList());
		return availDto;
	}

}
