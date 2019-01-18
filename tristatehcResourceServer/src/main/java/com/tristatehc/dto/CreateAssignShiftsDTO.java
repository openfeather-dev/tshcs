package com.tristatehc.dto;

import java.util.List;

public class CreateAssignShiftsDTO {
	
	private String custid;
	
	private String shiftId;
	
	private String email;
	
	private String shiftDate;
	
	private String shiftTitleCode;
	
	private String shiftTime;
	
	private String nameList;
	
	private String status;
	
	private String timeIn;
	
	private String timeOut;
	
	private String breakTime;
	
	private String fut1;
	
	private String fut2;
	
	private List<String> messageCadidateList;
	
	private String comments;
	
	private String action;

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

	

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}

	public String getTimeOut() {
		return timeOut;
	}

	public void setTimeOut(String timeOut) {
		this.timeOut = timeOut;
	}

	public List<String> getMessageCadidateList() {
		return messageCadidateList;
	}

	public void setMessageCadidateList(List<String> messageCadidateList) {
		this.messageCadidateList = messageCadidateList;
	}

	@Override
	public String toString() {
		return "CreateAssignShiftsDTO [" + (custid != null ? "custid=" + custid + ", " : "")
				+ (shiftId != null ? "shiftId=" + shiftId + ", " : "") + (email != null ? "email=" + email + ", " : "")
				+ (shiftDate != null ? "shiftDate=" + shiftDate + ", " : "")
				+ (shiftTitleCode != null ? "shiftTitleCode=" + shiftTitleCode + ", " : "")
				+ (shiftTime != null ? "shiftTime=" + shiftTime + ", " : "")
				+ (nameList != null ? "nameList=" + nameList + ", " : "")
				+ (status != null ? "status=" + status + ", " : "") + (timeIn != null ? "timeIn=" + timeIn + ", " : "")
				+ (timeOut != null ? "timeOut=" + timeOut + ", " : "")
				+ (breakTime != null ? "breakTime=" + breakTime + ", " : "")
				+ (fut1 != null ? "fut1=" + fut1 + ", " : "") + (fut2 != null ? "fut2=" + fut2 + ", " : "")
				+ (messageCadidateList != null ? "messageCadidateList=" + messageCadidateList + ", " : "")
				+ (comments != null ? "comments=" + comments + ", " : "") + (action != null ? "action=" + action : "")
				+ "]";
	}

	
	
	

}
