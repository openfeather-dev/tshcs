package com.tristatehc.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tristatehc.entity.Availability;
import com.tristatehc.entity.AvailabilityId;

@Repository
public interface AvailabilityRepository extends JpaRepository<Availability, AvailabilityId>{
	
	List<Availability> findAllByAvailabilityId_empId(String empId);

}
