package com.tristatehc.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.tristatehc.entity.Availability;
import com.tristatehc.entity.AvailabilityId;
import com.tristatehc.entity.UserAvailabilityProjection;

public interface UserAvailabilityRepository extends JpaRepository<Availability, AvailabilityId>{
		
	@Query("SELECT avail as availability , user as userProfile FROM Availability AS avail LEFT JOIN UserProfile AS user ON avail.availabilityId.empId = user.empId")
	List<UserAvailabilityProjection> findAllAvailabilityForProjection();
	
	/*@Query("SELECT user.fname, user.lname, user.phoneCell, avail.* FROM Availability AS avail LEFT JOIN UserProfile AS user ON avail.availabilityId.empId = user.empId")
	List<UserAvailabilityDTO> findAllUserAvailability();*/

}
