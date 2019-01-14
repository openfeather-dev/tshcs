package com.tristatehc.dao;

import java.util.List;

import org.springframework.data.repository.query.Param;

import com.tristatehc.entity.AssignShifts;

public interface AssignShiftCustomRepository {

	List<AssignShifts> getAssignedShifts(@Param("p_cust") String customer,@Param("p_email") String email,@Param("p_shift_date") String shiftDate,@Param("p_search_dt_from") String fromSearchDate
			,@Param("p_search_dt_to") String toSearchDate,@Param("p_search_fut1") String searchFuture1,@Param("p_search_fut2") String searchFuture2,
			@Param("p_search_fut3") String searchFuture3,@Param("p_search_fut4") String searchFuture4,
			@Param("p_search_fut5") String searchFuture5,@Param("p_search_fut6") String searchFuture6,@Param("p_search_fut7_list") String searchFutureList);

	AssignShifts getValuesForNewAssignment(@Param("p_cust") String customer,@Param("p_email") String email);
}
