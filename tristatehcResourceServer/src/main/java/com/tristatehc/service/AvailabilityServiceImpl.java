package com.tristatehc.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tristatehc.dao.AvailabilityRepository;
import com.tristatehc.dao.UserAvailabilityRepository;
import com.tristatehc.dto.AvailabilityDTO;
import com.tristatehc.entity.Availability;
import com.tristatehc.entity.UserAvailabilityProjection;
import com.tristatehc.mapper.UserMapper;

@Service
public class AvailabilityServiceImpl implements AvailabilityService {

	@Autowired
	AvailabilityRepository repository;
	
	@Override
	public List<AvailabilityDTO> addAvailability(List<AvailabilityDTO> availabilityDto) {

		/*
		 * Get list of availabilities already stored in database to compare with the new
		 * list in order to find deleted availabilities
		 */
		List<AvailabilityDTO> existingAvailabilities = getAvailabilities(availabilityDto.get(0).getEmpId());
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

	public List<AvailabilityDTO> getAvailabilities(String empid) {
		List<Availability> savedAvailabilities = repository.findAllByAvailabilityId_empId(empid);

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
