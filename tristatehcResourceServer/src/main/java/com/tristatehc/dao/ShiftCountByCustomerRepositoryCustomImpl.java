package com.tristatehc.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

import com.tristatehc.entity.ShiftCountByCustomer;

public class ShiftCountByCustomerRepositoryCustomImpl implements ShiftCountByCustomerRepositoryCustom {

	 @PersistenceContext
	 private EntityManager em;

	 
	@Override
	public List<ShiftCountByCustomer> getCustomerShifts(String customer, String date, Integer startIndex,
			Integer endIndex) {
		StoredProcedureQuery getCustomerShiftsProcedure =
	              em.createNamedStoredProcedureQuery("getCustomerShifts").setParameter("p_cust", customer).
	              setParameter("p_start_dt", date).setParameter("start_indx", startIndex).setParameter("end_indx", endIndex);
		
	        return getCustomerShiftsProcedure.getResultList();
	}


	@Override
	public void saveCustomerShifts(String email, String customerId, int totalCount, int assignCount, int unassgCount,String title, String shiftDate, String shiftTime) {
		StoredProcedureQuery saveCustomerShiftsProcedure =
	              em.createNamedStoredProcedureQuery("saveCustomerShifts").setParameter("p_user_email", email).
	              setParameter("p_cust", customerId).setParameter("p_total_count", totalCount).setParameter("p_assig_count", assignCount).setParameter("p_unassg_count", unassgCount).setParameter("p_shift_title", title).setParameter("p_shift_dt", shiftDate).setParameter("p_shift_tm", shiftTime);
		 saveCustomerShiftsProcedure.execute();
	}
	

}
