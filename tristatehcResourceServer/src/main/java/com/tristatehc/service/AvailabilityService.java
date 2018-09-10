package com.tristatehc.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tristatehc.dto.AvailabilityDTO;

@Service
public interface AvailabilityService {

	public List<AvailabilityDTO> addAvailability(List<AvailabilityDTO> availabilityDto, String emailId);

	public List<AvailabilityDTO> getAvailabilities(String emailId);

	public List<AvailabilityDTO> getAllAvailabilities();
}
