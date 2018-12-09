package com.tristatehc.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

import com.tristatehc.entity.AvailabilityData;

public class UserAvailabilityRepositoryCustomImpl implements UserAvailabilityRepositoryCustom{

	 @PersistenceContext
	 private EntityManager em;

	@Override
	public List<AvailabilityData> getAvailabilityData(String email, String zipcode, String facility, String miles,
			String startDate, String endDate, String title,String shift7To3, String shift3To11, String shift11To7, String shiftOther,
			String elimBooked, String elimPending, String elimBanned, String elimNotBeen) {
		
		StoredProcedureQuery getAvailabilityDataProcedure =
	              em.createNamedStoredProcedureQuery("getAvailabilityData").setParameter("p_email", email).
	              setParameter("p_zip", zipcode).setParameter("p_faclity_nm", facility).setParameter("p_miles", miles).setParameter("p_start_dt", startDate).
	              setParameter("p_end_dt", endDate).setParameter("p_title",title).setParameter("p_shift_7_3", shift7To3).setParameter("p_shift_3_11", shift3To11).setParameter("p_shift_11_7", shift11To7).
	              setParameter("p_shift_other_tm", shiftOther).setParameter("p_elim_booked", elimBooked).setParameter("p_elim_pending", elimPending).setParameter("p_elim_banned", elimBanned).
	              setParameter("p_elim_not_been", elimNotBeen);
		
		return getAvailabilityDataProcedure.getResultList();
	}


}
