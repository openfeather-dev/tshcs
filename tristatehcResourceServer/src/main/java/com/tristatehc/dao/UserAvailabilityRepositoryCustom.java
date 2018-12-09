package com.tristatehc.dao;

import java.util.List;

import org.springframework.data.repository.query.Param;

import com.tristatehc.entity.AvailabilityData;

public interface UserAvailabilityRepositoryCustom {
	List<AvailabilityData> getAvailabilityData(@Param("p_email") String email, @Param("p_zip") String zipcode,@Param("p_faclity_nm") String facility,@Param("p_miles") String miles,@Param("p_start_dt") String startDate, @Param("p_end_dt") String endDate,@Param("p_title ") String title,@Param("p_shift_7_3") String shift7To3, @Param("p_shift_3_11") String shift3To11, @Param("p_shift_11_7") String shift11To7, @Param("p_shift_other_tm") String shiftOther,@Param("p_elim_booked") String elimBooked, @Param("p_elim_pending") String elimPending, @Param("p_elim_banned") String elimBanned, @Param("p_elim_not_been") String elimNotBeen);

}
