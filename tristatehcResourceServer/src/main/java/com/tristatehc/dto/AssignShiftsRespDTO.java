package com.tristatehc.dto;

import java.util.List;

public class AssignShiftsRespDTO {
	
	
	private String shiftId;
	

	private String custid;
	
	
	private String shiftDate;
		
	private List<DropDownDTO> shiftTitleCode;
	
	private List<DropDownDTO> shiftTime;
	
	private List<DropDownDTO> nameList;
	
	private List<DropDownDTO> status;
	
	private DropDownDTO selectedTitle;
	
	private DropDownDTO selectedShiftTime;
	
	private DropDownDTO selectedName;
	
	private DropDownDTO selectedStatus;
	
	private String timeIn;
	
	private String timeOut;
	
	private String breakTime;
	
	private String fut1;
	
	private String fut2;
	
	private String changeReason;
	
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


	public List<DropDownDTO> getShiftTime() {
		return shiftTime;
	}

	public void setShiftTime(List<DropDownDTO> shiftTime) {
		this.shiftTime = shiftTime;
	}

	public DropDownDTO getSelectedTitle() {
		return selectedTitle;
	}

	public void setSelectedTitle(DropDownDTO selectedTitle) {
		this.selectedTitle = selectedTitle;
	}

	public DropDownDTO getSelectedShiftTime() {
		return selectedShiftTime;
	}

	public void setSelectedShiftTime(DropDownDTO selectedShiftTime) {
		this.selectedShiftTime = selectedShiftTime;
	}

	public DropDownDTO getSelectedName() {
		return selectedName;
	}

	public void setSelectedName(DropDownDTO selectedName) {
		this.selectedName = selectedName;
	}

	public DropDownDTO getSelectedStatus() {
		return selectedStatus;
	}

	public void setSelectedStatus(DropDownDTO selectedStatus) {
		this.selectedStatus = selectedStatus;
	}

	public String getChangeReason() {
		return changeReason;
	}

	public void setChangeReason(String changeReason) {
		this.changeReason = changeReason;
	}

	@Override
	public String toString() {
		return "AssignShiftsRespDTO [" + (shiftId != null ? "shiftId=" + shiftId + ", " : "")
				+ (custid != null ? "custid=" + custid + ", " : "")
				+ (shiftDate != null ? "shiftDate=" + shiftDate + ", " : "")
				+ (shiftTitleCode != null ? "shiftTitleCode=" + shiftTitleCode + ", " : "")
				+ (shiftTime != null ? "shiftTime=" + shiftTime + ", " : "")
				+ (nameList != null ? "nameList=" + nameList + ", " : "")
				+ (status != null ? "status=" + status + ", " : "")
				+ (selectedTitle != null ? "selectedTitle=" + selectedTitle + ", " : "")
				+ (selectedShiftTime != null ? "selectedShiftTime=" + selectedShiftTime + ", " : "")
				+ (selectedName != null ? "selectedName=" + selectedName + ", " : "")
				+ (selectedStatus != null ? "selectedStatus=" + selectedStatus + ", " : "")
				+ (timeIn != null ? "timeIn=" + timeIn + ", " : "")
				+ (timeOut != null ? "timeOut=" + timeOut + ", " : "")
				+ (breakTime != null ? "breakTime=" + breakTime + ", " : "")
				+ (fut1 != null ? "fut1=" + fut1 + ", " : "") + (fut2 != null ? "fut2=" + fut2 + ", " : "")
				+ (changeReason != null ? "changeReason=" + changeReason + ", " : "")
				+ (messageCadidateList != null ? "messageCadidateList=" + messageCadidateList + ", " : "")
				+ (comments != null ? "comments=" + comments + ", " : "")
				+ (getShiftId() != null ? "getShiftId()=" + getShiftId() + ", " : "")
				+ (getCustid() != null ? "getCustid()=" + getCustid() + ", " : "")
				+ (getShiftDate() != null ? "getShiftDate()=" + getShiftDate() + ", " : "")
				+ (getShiftTitleCode() != null ? "getShiftTitleCode()=" + getShiftTitleCode() + ", " : "")
				+ (getNameList() != null ? "getNameList()=" + getNameList() + ", " : "")
				+ (getStatus() != null ? "getStatus()=" + getStatus() + ", " : "")
				+ (getTimeIn() != null ? "getTimeIn()=" + getTimeIn() + ", " : "")
				+ (getTimeOut() != null ? "getTimeOut()=" + getTimeOut() + ", " : "")
				+ (getBreakTime() != null ? "getBreakTime()=" + getBreakTime() + ", " : "")
				+ (getFut1() != null ? "getFut1()=" + getFut1() + ", " : "")
				+ (getFut2() != null ? "getFut2()=" + getFut2() + ", " : "")
				+ (getMessageCadidateList() != null ? "getMessageCadidateList()=" + getMessageCadidateList() + ", "
						: "")
				+ (getComments() != null ? "getComments()=" + getComments() + ", " : "")
				+ (getShiftTime() != null ? "getShiftTime()=" + getShiftTime() + ", " : "")
				+ (getSelectedTitle() != null ? "getSelectedTitle()=" + getSelectedTitle() + ", " : "")
				+ (getSelectedShiftTime() != null ? "getSelectedShiftTime()=" + getSelectedShiftTime() + ", " : "")
				+ (getSelectedName() != null ? "getSelectedName()=" + getSelectedName() + ", " : "")
				+ (getSelectedStatus() != null ? "getSelectedStatus()=" + getSelectedStatus() + ", " : "")
				+ (getChangeReason() != null ? "getChangeReason()=" + getChangeReason() + ", " : "")
				+ (getClass() != null ? "getClass()=" + getClass() + ", " : "") + "hashCode()=" + hashCode() + ", "
				+ (super.toString() != null ? "toString()=" + super.toString() : "") + "]";
	}

	

}
