package com.tristatehc.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.tristatehc.entity.AvailabilityData;

public interface UserAvailabilityRepository extends JpaRepository<AvailabilityData, String>{
		
	/*@Query("SELECT avail as availability , user as userProfile FROM Availability AS avail LEFT JOIN UserProfile AS user ON avail.availabilityId.empId = user.empId")
	List<UserAvailabilityProjection> findAllAvailabilityForProjection();*/
	
	@Query(value="select * from avail_data_vw", nativeQuery= true)
	List<AvailabilityData> getViewResult();
	
	
	
}
