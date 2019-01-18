package com.tristatehc.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

import org.springframework.data.repository.query.Param;

import com.tristatehc.entity.AssignShifts;

public class AssignShiftCustomRepositoryImpl implements AssignShiftCustomRepository {

	 @PersistenceContext
	 private EntityManager em;

	@Override
	public List<AssignShifts> getAssignedShifts(String customer, String email, String shiftDate, String fromSearchDate,
			String toSearchDate, String searchFuture1, String searchFuture2, String searchFuture3, String searchFuture4,
			String searchFuture5, String searchFuture6, String searchFutureList) {
		StoredProcedureQuery getAssignedShiftsProcedure =
	              em.createNamedStoredProcedureQuery("getAssignedShift").setParameter("p_cust", customer).
	              setParameter("p_email", email).setParameter("p_shift_date", shiftDate).setParameter("p_search_dt_from", fromSearchDate).
	              setParameter("p_search_dt_to", toSearchDate).
	              setParameter("p_search_fut1", searchFuture1).setParameter("p_search_fut2", searchFuture2).setParameter("p_search_fut3", searchFuture3).
	              setParameter("p_search_fut4", searchFuture4).
	              setParameter("p_search_fut5", searchFuture5).setParameter("p_search_fut6", searchFuture6).setParameter("p_search_fut7_list", searchFutureList);
	
		
		return getAssignedShiftsProcedure.getResultList();
	}

	@Override
	public AssignShifts getValuesForNewAssignment(String customer, String email) {
		StoredProcedureQuery getValuesForNewAssignmentProcedure =
	              em.createNamedStoredProcedureQuery("getValuesForNewAssignment").setParameter("p_cust", customer).
	              setParameter("p_email", email);
		return (AssignShifts) getValuesForNewAssignmentProcedure.getSingleResult();
	}

	@Override
	public List<AssignShifts> newAssignment(String customer, String email, String shiftDate, String shiftId,
			String titles, String shifts, String candidateList, String status, String inTime, String outTime,
			String breakTime,String notifyUsers, String notes, String action) {
		
		StoredProcedureQuery newAssignmentProcedure =
	              em.createNamedStoredProcedureQuery("newAssignment").setParameter("p_cust", customer).
	              setParameter("p_email", email).setParameter("p_shift_date", shiftDate).setParameter("p_shift_id", shiftId).
	              setParameter("p_titles", titles).
	              setParameter("p_shifts", shifts).setParameter("p_candi_list", candidateList).setParameter("p_status", status).
	              setParameter("p_shift_ti", inTime).
	              setParameter("p_shift_to", outTime).setParameter("p_shift_brk", breakTime).setParameter("p_notify_users", notifyUsers.toString())
	              .setParameter("p_special_notes", notes).setParameter("p_action", action);
		
		return newAssignmentProcedure.getResultList();
	}
}
