package com.tristatehc.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedStoredProcedureQueries;
import javax.persistence.NamedStoredProcedureQuery;
import javax.persistence.ParameterMode;
import javax.persistence.StoredProcedureParameter;
import javax.persistence.Table;

@Entity
@Table(name = "AssignShifts")
@NamedStoredProcedureQueries({
   @NamedStoredProcedureQuery(name = "getAssignedShift", 
                              procedureName = "ASSIGN_SHIFT_BY_CUST_READ_MAIN",
                              resultClasses = { AssignShifts.class },
                              parameters = {
                            	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_cust", type = String.class),
                            	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_email", type = String.class),
                            	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_shift_date", type = String.class),
                            	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_search_dt_from", type = String.class),
                            	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_search_dt_to", type = String.class),
                            	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_search_fut1", type = String.class),
                            	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_search_fut2", type = String.class),
                            	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_search_fut3", type = String.class),
                            	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_search_fut4", type = String.class),
                            	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_search_fut5", type = String.class),
                            	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_search_fut6", type = String.class),
                            	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_search_fut7_list", type = String.class)
                              }),
   @NamedStoredProcedureQuery(name = "newAssignment", 
   procedureName = "ASSIGN_SHIFT_BY_CUST_WRITE_WHILE_ADD",
   resultClasses = { AssignShifts.class },
   parameters = {
 	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_cust", type = String.class),
 	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_email", type = String.class),
 	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_shift_date", type = String.class),
 	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_shift_id", type = String.class),
 	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_titles", type = String.class),
 	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_shifts", type = String.class),
 	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_candi_list", type = String.class),
 	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_status", type = String.class),
 	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_shift_ti", type = String.class),
 	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_shift_to", type = String.class),
 	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_shift_brk", type = String.class),
 	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_notify_users", type = String.class),
 	@StoredProcedureParameter(mode = ParameterMode.IN, name = "p_special_notes", type = String.class),
 	@StoredProcedureParameter(mode = ParameterMode.IN, name = "p_action", type = String.class)
   }),
   @NamedStoredProcedureQuery(name = "getValuesForNewAssignment", 
   procedureName = "ASSIGN_SHIFT_BY_CUST_READ_WHILE_ADD",
   resultClasses = { AssignShifts.class },
   parameters = {
 	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_cust", type = String.class),
 	 @StoredProcedureParameter(mode = ParameterMode.IN, name = "p_email", type = String.class)
   })
})
public class AssignShifts {
	@Id
	@Column(name="shift_id")
	private String shiftId;
	
	@Column(name="custid")
	private String custid;
	
	@Column(name="shift_dt")
	private String shiftDate;
	
	@Column(name="shift_title_code")
	private String shiftTitleCode;
	
	@Column(name="shift_tm_mt")
	private String shiftTime;
	
	@Column(name="book_candi_list")
	private String nameList;
	
	@Column(name="status")
	private String status;
	
	@Column(name="time_in")
	private String timeIn;
	
	@Column(name="time_out")
	private String TimeOut;
	
	@Column(name="break_tm")
	private String breakTime;
	
	@Column(name="fut1")
	private String fut1;
	
	@Column(name="fut2")
	private String fut2;
	
	@Column(name="mesg_candi_list")
	private String messageCadidateList;
	
	@Column(name="comments")
	private String comments;

	public String getShiftId() {
		return shiftId;
	}

	public void setShiftId(String shiftId) {
		this.shiftId = shiftId;
	}

	public String getCustid() {
		return custid;
	}

	public void setCustid(String custid) {
		this.custid = custid;
	}

	public String getShiftDate() {
		return shiftDate;
	}

	public void setShiftDate(String shiftDate) {
		this.shiftDate = shiftDate;
	}

	public String getShiftTitleCode() {
		return shiftTitleCode;
	}

	public void setShiftTitleCode(String shiftTitleCode) {
		this.shiftTitleCode = shiftTitleCode;
	}

	public String getShiftTime() {
		return shiftTime;
	}

	public void setShiftTime(String shiftTime) {
		this.shiftTime = shiftTime;
	}

	public String getNameList() {
		return nameList;
	}

	public void setNameList(String nameList) {
		this.nameList = nameList;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getTimeIn() {
		return timeIn;
	}

	public void setTimeIn(String timeIn) {
		this.timeIn = timeIn;
	}

	public String getTimeOut() {
		return TimeOut;
	}

	public void setTimeOut(String timeOut) {
		TimeOut = timeOut;
	}

	public String getBreakTime() {
		return breakTime;
	}

	public void setBreakTime(String breakTime) {
		this.breakTime = breakTime;
	}

	public String getFut1() {
		return fut1;
	}

	public void setFut1(String fut1) {
		this.fut1 = fut1;
	}

	public String getFut2() {
		return fut2;
	}

	public void setFut2(String fut2) {
		this.fut2 = fut2;
	}

	public String getMessageCadidateList() {
		return messageCadidateList;
	}

	public void setMessageCadidateList(String messageCadidateList) {
		this.messageCadidateList = messageCadidateList;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	@Override
	public String toString() {
		return "AssignShifts [" + (shiftId != null ? "shiftId=" + shiftId + ", " : "")
				+ (custid != null ? "custid=" + custid + ", " : "")
				+ (shiftDate != null ? "shiftDate=" + shiftDate + ", " : "")
				+ (shiftTitleCode != null ? "shiftTitleCode=" + shiftTitleCode + ", " : "")
				+ (shiftTime != null ? "shiftTime=" + shiftTime + ", " : "")
				+ (nameList != null ? "nameList=" + nameList + ", " : "")
				+ (status != null ? "status=" + status + ", " : "") + (timeIn != null ? "timeIn=" + timeIn + ", " : "")
				+ (TimeOut != null ? "TimeOut=" + TimeOut + ", " : "")
				+ (breakTime != null ? "breakTime=" + breakTime + ", " : "")
				+ (fut1 != null ? "fut1=" + fut1 + ", " : "") + (fut2 != null ? "fut2=" + fut2 + ", " : "")
				+ (messageCadidateList != null ? "messageCadidateList=" + messageCadidateList + ", " : "")
				+ (comments != null ? "comments=" + comments : "") + "]";
	}
	
	

}
