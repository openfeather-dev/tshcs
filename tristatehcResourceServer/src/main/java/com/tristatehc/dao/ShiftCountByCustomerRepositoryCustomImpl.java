package com.tristatehc.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureParameter;
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

}
