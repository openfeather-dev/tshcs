package com.tristatehc.dao;

import java.util.List;

import org.springframework.data.repository.query.Param;

import com.tristatehc.entity.ShiftCountByCustomer;

public interface ShiftCountByCustomerRepositoryCustom {
	List<ShiftCountByCustomer> getCustomerShifts(@Param("p_cust") String customer,@Param("p_start_dt") String date,@Param("start_indx") Integer startIndex,@Param("end_indx") Integer endIndex);
}
