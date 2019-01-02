package com.tristatehc.dto;

import java.util.Map;

public class CustShiftDTO {
	 private String adminEmail;
	 private String customerId;
	 private int assignedCount;
	 private int unassignedCount;
	 private Map<String,String> comment;
	 private Map<String,String>  shifts;
	 
		 
	public String getAdminEmail() {
		return adminEmail;
	}
	public void setAdminEmail(String adminEmail) {
		this.adminEmail = adminEmail;
	}
	public String getCustomerId() {
		return customerId;
	}
	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}
	public int getAssignedCount() {
		return assignedCount;
	}
	public void setAssignedCount(int assignedCount) {
		this.assignedCount = assignedCount;
	}
	public int getUnassignedCount() {
		return unassignedCount;
	}
	public void setUnassignedCount(int unassignedCount) {
		this.unassignedCount = unassignedCount;
	}
	public Map<String, String> getComment() {
		return comment;
	}
	public void setComment(Map<String, String> comment) {
		this.comment = comment;
	}
	public Map<String, String> getShifts() {
		return shifts;
	}
	public void setShifts(Map<String, String> shifts) {
		this.shifts = shifts;
	}
	@Override
	public String toString() {
		return "CustShiftDTO [" + (adminEmail != null ? "adminEmail=" + adminEmail + ", " : "")
				+ (customerId != null ? "customerId=" + customerId + ", " : "") + "assignedCount=" + assignedCount
				+ ", unassignedCount=" + unassignedCount + ", " + (comment != null ? "comment=" + comment + ", " : "")
				+ (shifts != null ? "shifts=" + shifts : "") + "]";
	}
	
}
