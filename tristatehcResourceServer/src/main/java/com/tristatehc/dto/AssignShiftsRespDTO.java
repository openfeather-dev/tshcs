package com.tristatehc.dto;

import java.util.List;

public class AssignShiftsRespDTO {
	
	   /*'shiftDate':new Date("12/29/2018"), 
       'id':'12222',
       'title':['CNA'],
       'shift':['7-3'],
       'name':["Sneha"],
       'status':["Pending"],
       'timeIn':new Date("12/29/2018"),
       'timeOut':new Date("12/29/2018"),
       'breakTime':new Date("12/29/2018"),
       'notify':['Sneha'],
       'specialNotes':'I am okk to go',
       'action':'remove'*/
	
	private String shiftId;
	

	private String custid;
	
	
	private String shiftDate;
		
	private List<DropDownDTO> shiftTitleCode;
	
	private List<DropDownDTO> shiftTime;
	
	private List<DropDownDTO> nameList;
	
	private List<DropDownDTO> status;
	
	private String timeIn;
	
	private String timeOut;
	
	private String breakTime;
	
	private String fut1;
	
	private String fut2;
	
	private List<DropDownDTO> messageCadidateList;
	
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

	public List<DropDownDTO> getShiftTitleCode() {
		return shiftTitleCode;
	}

	public void setShiftTitleCode(List<DropDownDTO> shiftTitleCode) {
		this.shiftTitleCode = shiftTitleCode;
	}



	public List<DropDownDTO> getNameList() {
		return nameList;
	}

	public void setNameList(List<DropDownDTO> nameList) {
		this.nameList = nameList;
	}

	public List<DropDownDTO> getStatus() {
		return status;
	}

	public void setStatus(List<DropDownDTO> status) {
		this.status = status;
	}

	public String getTimeIn() {
		return timeIn;
	}

	public void setTimeIn(String timeIn) {
		this.timeIn = timeIn;
	}

	public String getTimeOut() {
		return timeOut;
	}

	public void setTimeOut(String timeOut) {
		this.timeOut = timeOut;
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

	public List<DropDownDTO> getMessageCadidateList() {
		return messageCadidateList;
	}

	public void setMessageCadidateList(List<DropDownDTO> messageCadidateList) {
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
		return "AssignShiftsRespDTO [" + (shiftId != null ? "shiftId=" + shiftId + ", " : "")
				+ (custid != null ? "custid=" + custid + ", " : "")
				+ (shiftDate != null ? "shiftDate=" + shiftDate + ", " : "")
				+ (shiftTitleCode != null ? "shiftTitleCode=" + shiftTitleCode + ", " : "")
				+ (shiftTime != null ? "shiftTime=" + shiftTime + ", " : "")
				+ (nameList != null ? "nameList=" + nameList + ", " : "")
				+ (status != null ? "status=" + status + ", " : "") + (timeIn != null ? "timeIn=" + timeIn + ", " : "")
				+ (timeOut != null ? "timeOut=" + timeOut + ", " : "")
				+ (breakTime != null ? "breakTime=" + breakTime + ", " : "")
				+ (fut1 != null ? "fut1=" + fut1 + ", " : "") + (fut2 != null ? "fut2=" + fut2 + ", " : "")
				+ (messageCadidateList != null ? "messageCadidateList=" + messageCadidateList + ", " : "")
				+ (comments != null ? "comments=" + comments : "") + "]";
	}

	public List<DropDownDTO> getShiftTime() {
		return shiftTime;
	}

	public void setShiftTime(List<DropDownDTO> shiftTime) {
		this.shiftTime = shiftTime;
	}

	

}
