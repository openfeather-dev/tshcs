package com.tristatehc.dao;

import java.util.List;

import org.springframework.data.repository.query.Param;

import com.tristatehc.entity.ShiftCountByCustomer;

public interface ShiftCountByCustomerRepositoryCustom {
	List<ShiftCountByCustomer> getCustomerShifts(@Param("p_cust") String customer,@Param("p_start_dt") String date,@Param("start_indx") Integer startIndex,@Param("end_indx") Integer endIndex);
	void saveCustomerShifts(@Param("p_user_email") String email, @Param("p_cust") String customerId, @Param("p_total_count") int totalCount, @Param("p_assig_count ") int assignCount, @Param("p_unassg_count ") int unassgCount, @Param("p_shift_title") String title, @Param("p_shift_dt") String shiftDate, @Param("p_shift_tm") String shiftTime);
}
