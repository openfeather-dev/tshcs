package com.tristatehc.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tristatehc.dao.UserAvailabilityRepository;
import com.tristatehc.dto.UserAvailabilitySearchCriteria;
import com.tristatehc.entity.AvailabilityData;

@Service
public class UserAvailabilityServiceImpl implements UserAvailabilityService {
	
	@Autowired UserAvailabilityRepository repository;

	
	public List<AvailabilityData> getAllUserAvailability(UserAvailabilitySearchCriteria search){	
		return repository.getAvailabilityData(search.getLoggedInUserEmail(),search.getZipcode(),search.getSelectedFacility(), search.getRadius(), search.getShiftDateFrom(),search.getShiftDateTo(),search.getSelectedTitle(),search.getSelectedShift7To3(), search.getSelectedShift3To11(),search.getSelectedShift11To7(),search.getSelectedShiftOther(), search.getSelectedEliminateBooked(), search.getSelectedEliminatePending(), search.getSelectedEliminateBanned(), search.getSelectedEliminateNotBeen());
		
	}

}
