package com.tristatehc.service;

import java.util.List;

import com.tristatehc.entity.AvailabilityData;
import com.tristatehc.dto.UserAvailabilitySearchCriteria;

public interface UserAvailabilityService {
	List<AvailabilityData> getAllUserAvailability(UserAvailabilitySearchCriteria search);
}
