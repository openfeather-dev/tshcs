package com.tristatehc.dao;

import org.springframework.data.repository.CrudRepository;

import com.tristatehc.entity.AvailabilityData;

public interface UserAvailabilityRepository extends CrudRepository<AvailabilityData, String>,UserAvailabilityRepositoryCustom{
	
}
