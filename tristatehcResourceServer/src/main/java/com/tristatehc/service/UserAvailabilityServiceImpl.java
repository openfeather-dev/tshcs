package com.tristatehc.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tristatehc.dao.UserAvailabilityRepository;
import com.tristatehc.dto.UserAvailabilitySearchCriteria;
import com.tristatehc.entity.AvailabilityData;

@Service
public class UserAvailabilityServiceImpl implements UserAvailabilityService {
	
	Logger logger = LoggerFactory.getLogger(UserAvailabilityServiceImpl.class);
	
	@Autowired UserAvailabilityRepository repository;

	
	public List<AvailabilityData> getAllUserAvailability(UserAvailabilitySearchCriteria search){
		logger.info("Email = "+search.getLoggedInUserEmail()+" ,zipcode = "+search.getZipcode()+" ,Facility Name = "+search.getSelectedFacility()+" ,Radius (miles) = "+search.getRadius()+" ,Shift From Date = "+search.getShiftDateFrom()+" ,Shift To Date = "+search.getShiftDateTo()+" ,Title = "+search.getSelectedTitle()+" ,Shift7To3 = "+search.getSelectedShift7To3()+" ,Shift3To11 = "+search.getSelectedShift3To11()+" ,Shift11To7 = "+search.getSelectedShift11To7()+" ,ShiftOther = "+search.getSelectedShiftOther()+" ,Eliminate Already Booked = "+search.getSelectedEliminateBooked()+" ,New application = "+search.getSelectedEliminatePending()+" ,Blacklisted = "+ search.getSelectedEliminateBanned()+" ,Has not been there = "+search.getSelectedEliminateNotBeen());
		return repository.getAvailabilityData(search.getLoggedInUserEmail(),search.getZipcode(),search.getSelectedFacility(), search.getRadius(), search.getShiftDateFrom(),search.getShiftDateTo(),search.getSelectedTitle(),search.getSelectedShift7To3(), search.getSelectedShift3To11(),search.getSelectedShift11To7(),search.getSelectedShiftOther(), search.getSelectedEliminateBooked(), search.getSelectedEliminatePending(), search.getSelectedEliminateBanned(), search.getSelectedEliminateNotBeen());
		
	}

}
